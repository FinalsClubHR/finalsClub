
var express = require('express');
var models = require('./models');
passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;
var auth = require('./authentication.js');
var sharejs = require('share').server;
var utils = require('./utils');
// var redis = require('./redis');

//set up server
var port = Number(process.env.PORT || 5000);;
app = express();

//attach share JS server to app
var options = {
  db: {
    type: 'none'
    // type: 'redis',
    // hostname: redis.rtg.hostname,
    // port: redis.rtg.port,
    // auth: redis.rtg.auth.split(':')[1] || null
  },
  browserChannel: {
    cors: "*"
  }
};

sharejs.attach(app, options);

app.listen(port);
console.log('Listening on port ' + port);  

//sets up templating engine as jade
app.engine('jade', require('jade').__express);

//configures static asset delivery
app.use(express.static(__dirname + '/public'));

//configures passport js
app.use(express.cookieParser());
app.use(express.bodyParser());
app.use(express.session({
  secret: process.env.CLIENT_SECRET  || 'cats4life'
}));
app.use(passport.initialize())
app.use(passport.session());

passport.serializeUser(function(user, done) {
 done(null, user._id);
});

passport.deserializeUser(function(id, done) {
 models.User.findById(id, function(err, user){
     if(!err) done(null, user);
     else done(err, null)
 })
});

var login = require('./login');
var pages = require('./pages');
var api = require('./api');
