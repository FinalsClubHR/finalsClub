
//require dependencies
var express = require('express');
var models = require('./models');
var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;
var config = require('./oauth.js');
var auth = require('./authentication.js');

//set up server
var port = 8080;
var app = express();
app.listen(port);
console.log('Listening on port ' + port);  

//sets up templating engine as jade
app.engine('jade', require('jade').__express);

//configures static asset delivery
app.use(express.static(__dirname + '/public'));

//configures passport js
app.use(express.cookieParser());
app.use(express.bodyParser());
app.use(express.session({ secret: 'keyboard cat' }));
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function(user, done) {
 console.log('serializeUser: ' + user)
 done(null, user._id);
});
passport.deserializeUser(function(id, done) {
 models.User.findById(id, function(err, user){
     console.log(user)
     if(!err) done(null, user);
     else done(err, null)
 })
});

// var routes = [
//   '/',
//   '/log_in',
//   '/sign_up',
//   // '/groups/:id/flashcards',
//   // '/groups/:id/flashcards/:lecture_id',
//   // '/groups/:id/flashcards/:lecture_id/edit',
//   // '/groups/search',
//   // '/groups/new',
//   // '/groups/:id/members',
//   // '/groups/:id/communications'
// ];  

//-------------------------LOG IN ROUTES -----------------------------//
app.set('user', null);

app.get('/log_in', function(req, res) {
  res.render('log_in.jade');
})

app.get('/sign_up', function(req, res) {
  models.School.find().exec(function(err, schools) {
    res.render('sign_up.jade', {schools: JSON.stringify(schools)});
  });
})

app.get('/log_out', function(req, res) {
  req.logout();
  res.redirect('/log_in');
});

//FB routes
app.get('/auth/facebook', passport.authenticate('facebook'));

app.get('/auth/facebook/callback',
  passport.authenticate('facebook', { failureRedirect: '/log_in' }),
  function(req, res) {
    app.set('user', req.user);
    if (req.user.first_name) {
      res.redirect('/');      
    } else {
      res.redirect('/sign_up?id='+req.user.id);
    }
  });

//----------------------STATIC ROUTES--------------------------//


app.get('/', isLoggedIn, function(req, res) {
  var name = app.get('user').first_name + " " + app.get('user').last_name;
  models.User.find({ _id: app.get('user')._id})
             .populate('groups')
             .exec(function(err, userG) {              
              res.render('groups.jade', {user: name, image: app.get('user').image, groups: JSON.stringify(userG[0].groups)});
             })
});

app.get('/groups/new', isLoggedIn, function(req, res) {
  models.Course.find({ school_id: app.get('user').school_id })
              .exec(function(err, courses){
                res.render('create-group.jade', {user: app.get('user').first_name, image: app.get('user').image, courses: JSON.stringify(courses) });
              })
});

app.get('/groups/search', isLoggedIn, function(req, res) {
  if (req.query['courses']) {
    models.Course.find({ school_id: app.get('user').school_id })
                .exec(function(err, courses){
                  res.render('create-group.jade', {user: app.get('user').first_name, image: app.get('user').image, courses: JSON.stringify(courses) });
                })
  } else {
    models.Group.find().exec(function(err, groups) {
      res.render('find-group.jade', {user: app.get('user').first_name, image: app.get('user').image, groups: JSON.stringify(groups) });    
    });    
  }
});




//--------------------------- API -----------------------------//

//GET routes

app.get('/groups', function(req, res) {
  if (req.query['user_id']) {    
    //return groups for that user
    models.User.findOne({ _id: req.query['user_id'] })
               .populate('groups')
               .exec(function(err, user) {
                 res.send(200, JSON.stringify(user.groups));            
               });  
  } else {
    //return all groups with their users
    models.Group.find()
                .populate('users')
                .exec(function(err, groups) {
                  res.send(200, JSON.stringify(groups));
                });
  }
});

app.get('/users', function(req, res) {
  if (req.query['id']) {
    //return user
    models.User.findOne({_id: req.query['id']}, function(err, user) {
      res.send(200, JSON.stringify(user));
    });
  }
});

app.get('/lectures', function(req, res) {
  if (req.query['id']) {
    //return lecture with its parent group name
    models.Lecture.findOne({ _id: req.query['id'] })
                  .populate('group_id', 'name')
                  .exec(function(err, lecture) {
                    res.send(200, JSON.stringify(lecture));
                  });

  } else if (req.query['group_id']) {
    //return lectures with their parent group name
    models.Lecture.find({ group_id: req.query['group_id'] })
                  .populate('group_id', 'name')
                  .exec(function(err, lectures) {
                    res.send(200, JSON.stringify(lectures));
                  });      
  }
});

app.get('/communications', function(req, res) {
  if (req.query['group_id']) {
    models.Communication.find({group_id: req.query['group_id']})
                        .populate('user_id')
                        .exec(function(err, communications) {
                          res.send(200, JSON.stringify(communications));
                        });
  }
});

app.get('/courses', function(req, res) {
  if (req.query['school_id']) {
    models.Course.find({ school_id: req.query['school_id'] })
                 .exec(function(err, courses) {
                   res.send(200, JSON.stringify(courses));
                 });
  }
});

app.get('/schools', function(req, res) {
  models.School.find()
               .exec(function(err, schools) {
                res.send(200, JSON.stringify(schools));
               });
});


app.put('/sign_up/:id', function(req, res){
  models.User.findOne({ _id: req.params.id }, function(err, user){
    user.email = req.body.email;
    user.school_id = req.body.school._id;
    user.phone_number = req.body.phone_number;
    user.intensity = req.body.intensity;
    user.save(function(err, user){
      console.log(user);
      res.send(200);
    });
  });
})

//POST routes

app.post('/users', function(req, res){

});

app.post('/groups', function(req, res){
  var group = new models.Group(req.body);
  group.users.push(app.get('user')._id);
  
  group.save(function(){
    models.User.findOne({
      _id : app.get('user')._id
    }).exec(function(err, user){
      user.groups.push(group._id);
      user.save(function() {
        console.log(group)
        res.send(201);
      })
    })
  })
});

app.post('/requests', function(req, res){

});

app.post('/new_member', function(req, res){

});

//----------------------helper functions-------------------------//

function isLoggedIn(req, res, next) {

  if (req.isAuthenticated())
    return next();

  res.send(401, "User must log in.");
  res.redirect('/log_in');
}
