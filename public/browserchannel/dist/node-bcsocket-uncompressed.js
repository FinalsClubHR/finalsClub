(function(){
function e() {
  return function() {
  }
}
function n(a) {
  return function(b) {
    this[a] = b
  }
}
function aa(a) {
  return function() {
    return this[a]
  }
}
function ba(a) {
  return function() {
    return a
  }
}
var p, ca = ca || {}, q = this;
function da(a) {
  a = a.split(".");
  for(var b = q, c;c = a.shift();) {
    if(null != b[c]) {
      b = b[c]
    }else {
      return null
    }
  }
  return b
}
function ea() {
}
function fa(a) {
  var b = typeof a;
  if("object" == b) {
    if(a) {
      if(a instanceof Array) {
        return"array"
      }
      if(a instanceof Object) {
        return b
      }
      var c = Object.prototype.toString.call(a);
      if("[object Window]" == c) {
        return"object"
      }
      if("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) {
        return"array"
      }
      if("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) {
        return"function"
      }
    }else {
      return"null"
    }
  }else {
    if("function" == b && "undefined" == typeof a.call) {
      return"object"
    }
  }
  return b
}
function s(a) {
  return"array" == fa(a)
}
function ga(a) {
  var b = fa(a);
  return"array" == b || "object" == b && "number" == typeof a.length
}
function u(a) {
  return"string" == typeof a
}
function ha(a) {
  return"function" == fa(a)
}
function v(a) {
  return a[ia] || (a[ia] = ++ja)
}
var ia = "closure_uid_" + (1E9 * Math.random() >>> 0), ja = 0;
function ka(a, b, c) {
  return a.call.apply(a.bind, arguments)
}
function la(a, b, c) {
  if(!a) {
    throw Error();
  }
  if(2 < arguments.length) {
    var d = Array.prototype.slice.call(arguments, 2);
    return function() {
      var c = Array.prototype.slice.call(arguments);
      Array.prototype.unshift.apply(c, d);
      return a.apply(b, c)
    }
  }
  return function() {
    return a.apply(b, arguments)
  }
}
function w(a, b, c) {
  w = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ka : la;
  return w.apply(null, arguments)
}
var x = Date.now || function() {
  return+new Date
};
function y(a, b) {
  function c() {
  }
  c.prototype = b.prototype;
  a.ra = b.prototype;
  a.prototype = new c
}
;function ma(a, b) {
  for(var c = 1;c < arguments.length;c++) {
    var d = String(arguments[c]).replace(/\$/g, "$$$$");
    a = a.replace(/\%s/, d)
  }
  return a
}
function na(a) {
  if(!oa.test(a)) {
    return a
  }
  -1 != a.indexOf("&") && (a = a.replace(pa, "&amp;"));
  -1 != a.indexOf("<") && (a = a.replace(qa, "&lt;"));
  -1 != a.indexOf(">") && (a = a.replace(ra, "&gt;"));
  -1 != a.indexOf('"') && (a = a.replace(sa, "&quot;"));
  return a
}
var pa = /&/g, qa = /</g, ra = />/g, sa = /\"/g, oa = /[&<>\"]/;
var z, ta, ua, va;
function wa() {
  return q.navigator ? q.navigator.userAgent : null
}
va = ua = ta = z = !1;
var xa;
if(xa = wa()) {
  var ya = q.navigator;
  z = 0 == xa.indexOf("Opera");
  ta = !z && -1 != xa.indexOf("MSIE");
  ua = !z && -1 != xa.indexOf("WebKit");
  va = !z && !ua && "Gecko" == ya.product
}
var za = z, A = ta, Aa = va, B = ua, Ba = q.navigator, Ca = -1 != (Ba && Ba.platform || "").indexOf("Mac");
function Da() {
  var a = q.document;
  return a ? a.documentMode : void 0
}
var Ea;
a: {
  var Fa = "", Ga;
  if(za && q.opera) {
    var Ha = q.opera.version, Fa = "function" == typeof Ha ? Ha() : Ha
  }else {
    if(Aa ? Ga = /rv\:([^\);]+)(\)|;)/ : A ? Ga = /MSIE\s+([^\);]+)(\)|;)/ : B && (Ga = /WebKit\/(\S+)/), Ga) {
      var Ia = Ga.exec(wa()), Fa = Ia ? Ia[1] : ""
    }
  }
  if(A) {
    var Ja = Da();
    if(Ja > parseFloat(Fa)) {
      Ea = String(Ja);
      break a
    }
  }
  Ea = Fa
}
var Ka = {};
function C(a) {
  var b;
  if(!(b = Ka[a])) {
    b = 0;
    for(var c = String(Ea).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), d = String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), f = Math.max(c.length, d.length), g = 0;0 == b && g < f;g++) {
      var h = c[g] || "", m = d[g] || "", k = RegExp("(\\d*)(\\D*)", "g"), t = RegExp("(\\d*)(\\D*)", "g");
      do {
        var l = k.exec(h) || ["", "", ""], r = t.exec(m) || ["", "", ""];
        if(0 == l[0].length && 0 == r[0].length) {
          break
        }
        b = ((0 == l[1].length ? 0 : parseInt(l[1], 10)) < (0 == r[1].length ? 0 : parseInt(r[1], 10)) ? -1 : (0 == l[1].length ? 0 : parseInt(l[1], 10)) > (0 == r[1].length ? 0 : parseInt(r[1], 10)) ? 1 : 0) || ((0 == l[2].length) < (0 == r[2].length) ? -1 : (0 == l[2].length) > (0 == r[2].length) ? 1 : 0) || (l[2] < r[2] ? -1 : l[2] > r[2] ? 1 : 0)
      }while(0 == b)
    }
    b = Ka[a] = 0 <= b
  }
  return b
}
var La = q.document, Ma = La && A ? Da() || ("CSS1Compat" == La.compatMode ? parseInt(Ea, 10) : 5) : void 0;
function Na(a) {
  Error.captureStackTrace ? Error.captureStackTrace(this, Na) : this.stack = Error().stack || "";
  a && (this.message = String(a))
}
y(Na, Error);
Na.prototype.name = "CustomError";
function Oa(a, b) {
  b.unshift(a);
  Na.call(this, ma.apply(null, b));
  b.shift();
  this.Kc = a
}
y(Oa, Na);
Oa.prototype.name = "AssertionError";
function Pa(a, b) {
  throw new Oa("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1));
}
;var Qa = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$");
function Ra(a) {
  var b = Sa, c;
  for(c in b) {
    a.call(void 0, b[c], c, b)
  }
}
function Ta(a) {
  var b = [], c = 0, d;
  for(d in a) {
    b[c++] = a[d]
  }
  return b
}
function Ua(a) {
  var b = [], c = 0, d;
  for(d in a) {
    b[c++] = d
  }
  return b
}
var Va = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
function Wa(a, b) {
  for(var c, d, f = 1;f < arguments.length;f++) {
    d = arguments[f];
    for(c in d) {
      a[c] = d[c]
    }
    for(var g = 0;g < Va.length;g++) {
      c = Va[g], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
    }
  }
}
;var D = Array.prototype, Xa = D.indexOf ? function(a, b, c) {
  return D.indexOf.call(a, b, c)
} : function(a, b, c) {
  c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
  if(u(a)) {
    return u(b) && 1 == b.length ? a.indexOf(b, c) : -1
  }
  for(;c < a.length;c++) {
    if(c in a && a[c] === b) {
      return c
    }
  }
  return-1
}, Ya = D.forEach ? function(a, b, c) {
  D.forEach.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, f = u(a) ? a.split("") : a, g = 0;g < d;g++) {
    g in f && b.call(c, f[g], g, a)
  }
};
function Za(a) {
  return D.concat.apply(D, arguments)
}
function $a(a) {
  var b = a.length;
  if(0 < b) {
    for(var c = Array(b), d = 0;d < b;d++) {
      c[d] = a[d]
    }
    return c
  }
  return[]
}
;function ab(a) {
  if("function" == typeof a.N) {
    return a.N()
  }
  if(u(a)) {
    return a.split("")
  }
  if(ga(a)) {
    for(var b = [], c = a.length, d = 0;d < c;d++) {
      b.push(a[d])
    }
    return b
  }
  return Ta(a)
}
function bb(a, b, c) {
  if("function" == typeof a.forEach) {
    a.forEach(b, c)
  }else {
    if(ga(a) || u(a)) {
      Ya(a, b, c)
    }else {
      var d;
      if("function" == typeof a.ka) {
        d = a.ka()
      }else {
        if("function" != typeof a.N) {
          if(ga(a) || u(a)) {
            d = [];
            for(var f = a.length, g = 0;g < f;g++) {
              d.push(g)
            }
          }else {
            d = Ua(a)
          }
        }else {
          d = void 0
        }
      }
      for(var f = ab(a), g = f.length, h = 0;h < g;h++) {
        b.call(c, f[h], d && d[h], a)
      }
    }
  }
}
;function cb(a, b) {
  this.O = {};
  this.j = [];
  var c = arguments.length;
  if(1 < c) {
    if(c % 2) {
      throw Error("Uneven number of arguments");
    }
    for(var d = 0;d < c;d += 2) {
      this.set(arguments[d], arguments[d + 1])
    }
  }else {
    if(a) {
      a instanceof cb ? (c = a.ka(), d = a.N()) : (c = Ua(a), d = Ta(a));
      for(var f = 0;f < c.length;f++) {
        this.set(c[f], d[f])
      }
    }
  }
}
p = cb.prototype;
p.f = 0;
p.cc = 0;
p.N = function() {
  db(this);
  for(var a = [], b = 0;b < this.j.length;b++) {
    a.push(this.O[this.j[b]])
  }
  return a
};
p.ka = function() {
  db(this);
  return this.j.concat()
};
p.ia = function(a) {
  return eb(this.O, a)
};
p.remove = function(a) {
  return eb(this.O, a) ? (delete this.O[a], this.f--, this.cc++, this.j.length > 2 * this.f && db(this), !0) : !1
};
function db(a) {
  if(a.f != a.j.length) {
    for(var b = 0, c = 0;b < a.j.length;) {
      var d = a.j[b];
      eb(a.O, d) && (a.j[c++] = d);
      b++
    }
    a.j.length = c
  }
  if(a.f != a.j.length) {
    for(var f = {}, c = b = 0;b < a.j.length;) {
      d = a.j[b], eb(f, d) || (a.j[c++] = d, f[d] = 1), b++
    }
    a.j.length = c
  }
}
p.get = function(a, b) {
  return eb(this.O, a) ? this.O[a] : b
};
p.set = function(a, b) {
  eb(this.O, a) || (this.f++, this.j.push(a), this.cc++);
  this.O[a] = b
};
p.n = function() {
  return new cb(this)
};
function eb(a, b) {
  return Object.prototype.hasOwnProperty.call(a, b)
}
;function E(a, b) {
  var c;
  if(a instanceof E) {
    this.D = void 0 !== b ? b : a.D, fb(this, a.qa), c = a.bb, F(this), this.bb = c, gb(this, a.ja), hb(this, a.Ba), ib(this, a.H), jb(this, a.R.n()), c = a.Na, F(this), this.Na = c
  }else {
    if(a && (c = String(a).match(Qa))) {
      this.D = !!b;
      fb(this, c[1] || "", !0);
      var d = c[2] || "";
      F(this);
      this.bb = d ? decodeURIComponent(d) : "";
      gb(this, c[3] || "", !0);
      hb(this, c[4]);
      ib(this, c[5] || "", !0);
      jb(this, c[6] || "", !0);
      c = c[7] || "";
      F(this);
      this.Na = c ? decodeURIComponent(c) : ""
    }else {
      this.D = !!b, this.R = new kb(null, 0, this.D)
    }
  }
}
p = E.prototype;
p.qa = "";
p.bb = "";
p.ja = "";
p.Ba = null;
p.H = "";
p.Na = "";
p.nc = !1;
p.D = !1;
p.toString = function() {
  var a = [], b = this.qa;
  b && a.push(lb(b, mb), ":");
  if(b = this.ja) {
    a.push("//");
    var c = this.bb;
    c && a.push(lb(c, mb), "@");
    a.push(encodeURIComponent(String(b)));
    b = this.Ba;
    null != b && a.push(":", String(b))
  }
  if(b = this.H) {
    this.ja && "/" != b.charAt(0) && a.push("/"), a.push(lb(b, "/" == b.charAt(0) ? nb : ob))
  }
  (b = this.R.toString()) && a.push("?", b);
  (b = this.Na) && a.push("#", lb(b, pb));
  return a.join("")
};
p.n = function() {
  return new E(this)
};
function fb(a, b, c) {
  F(a);
  a.qa = c ? b ? decodeURIComponent(b) : "" : b;
  a.qa && (a.qa = a.qa.replace(/:$/, ""))
}
function gb(a, b, c) {
  F(a);
  a.ja = c ? b ? decodeURIComponent(b) : "" : b
}
function hb(a, b) {
  F(a);
  if(b) {
    b = Number(b);
    if(isNaN(b) || 0 > b) {
      throw Error("Bad port number " + b);
    }
    a.Ba = b
  }else {
    a.Ba = null
  }
}
function ib(a, b, c) {
  F(a);
  a.H = c ? b ? decodeURIComponent(b) : "" : b
}
function jb(a, b, c) {
  F(a);
  b instanceof kb ? (a.R = b, a.R.qb(a.D)) : (c || (b = lb(b, qb)), a.R = new kb(b, 0, a.D))
}
function H(a, b, c) {
  F(a);
  a.R.set(b, c)
}
function rb(a, b, c) {
  F(a);
  s(c) || (c = [String(c)]);
  sb(a.R, b, c)
}
function I(a) {
  F(a);
  H(a, "zx", Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ x()).toString(36));
  return a
}
function F(a) {
  if(a.nc) {
    throw Error("Tried to modify a read-only Uri");
  }
}
p.qb = function(a) {
  this.D = a;
  this.R && this.R.qb(a);
  return this
};
function tb(a, b, c, d) {
  var f = new E(null, void 0);
  a && fb(f, a);
  b && gb(f, b);
  c && hb(f, c);
  d && ib(f, d);
  return f
}
function lb(a, b) {
  return u(a) ? encodeURI(a).replace(b, ub) : null
}
function ub(a) {
  a = a.charCodeAt(0);
  return"%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
}
var mb = /[#\/\?@]/g, ob = /[\#\?:]/g, nb = /[\#\?]/g, qb = /[\#\?@]/g, pb = /#/g;
function kb(a, b, c) {
  this.C = a || null;
  this.D = !!c
}
function J(a) {
  if(!a.i && (a.i = new cb, a.f = 0, a.C)) {
    for(var b = a.C.split("&"), c = 0;c < b.length;c++) {
      var d = b[c].indexOf("="), f = null, g = null;
      0 <= d ? (f = b[c].substring(0, d), g = b[c].substring(d + 1)) : f = b[c];
      f = decodeURIComponent(f.replace(/\+/g, " "));
      f = K(a, f);
      a.add(f, g ? decodeURIComponent(g.replace(/\+/g, " ")) : "")
    }
  }
}
p = kb.prototype;
p.i = null;
p.f = null;
p.add = function(a, b) {
  J(this);
  this.C = null;
  a = K(this, a);
  var c = this.i.get(a);
  c || this.i.set(a, c = []);
  c.push(b);
  this.f++;
  return this
};
p.remove = function(a) {
  J(this);
  a = K(this, a);
  return this.i.ia(a) ? (this.C = null, this.f -= this.i.get(a).length, this.i.remove(a)) : !1
};
p.ia = function(a) {
  J(this);
  a = K(this, a);
  return this.i.ia(a)
};
p.ka = function() {
  J(this);
  for(var a = this.i.N(), b = this.i.ka(), c = [], d = 0;d < b.length;d++) {
    for(var f = a[d], g = 0;g < f.length;g++) {
      c.push(b[d])
    }
  }
  return c
};
p.N = function(a) {
  J(this);
  var b = [];
  if(a) {
    this.ia(a) && (b = Za(b, this.i.get(K(this, a))))
  }else {
    a = this.i.N();
    for(var c = 0;c < a.length;c++) {
      b = Za(b, a[c])
    }
  }
  return b
};
p.set = function(a, b) {
  J(this);
  this.C = null;
  a = K(this, a);
  this.ia(a) && (this.f -= this.i.get(a).length);
  this.i.set(a, [b]);
  this.f++;
  return this
};
p.get = function(a, b) {
  var c = a ? this.N(a) : [];
  return 0 < c.length ? String(c[0]) : b
};
function sb(a, b, c) {
  a.remove(b);
  0 < c.length && (a.C = null, a.i.set(K(a, b), $a(c)), a.f += c.length)
}
p.toString = function() {
  if(this.C) {
    return this.C
  }
  if(!this.i) {
    return""
  }
  for(var a = [], b = this.i.ka(), c = 0;c < b.length;c++) {
    for(var d = b[c], f = encodeURIComponent(String(d)), d = this.N(d), g = 0;g < d.length;g++) {
      var h = f;
      "" !== d[g] && (h += "=" + encodeURIComponent(String(d[g])));
      a.push(h)
    }
  }
  return this.C = a.join("&")
};
p.n = function() {
  var a = new kb;
  a.C = this.C;
  this.i && (a.i = this.i.n(), a.f = this.f);
  return a
};
function K(a, b) {
  var c = String(b);
  a.D && (c = c.toLowerCase());
  return c
}
p.qb = function(a) {
  a && !this.D && (J(this), this.C = null, bb(this.i, function(a, c) {
    var d = c.toLowerCase();
    c != d && (this.remove(c), sb(this, d, a))
  }, this));
  this.D = a
};
function vb() {
}
vb.prototype.Ga = null;
var wb;
function xb() {
}
y(xb, vb);
function yb(a) {
  return(a = zb(a)) ? new ActiveXObject(a) : new XMLHttpRequest
}
function Ab(a) {
  var b = {};
  zb(a) && (b[0] = !0, b[1] = !0);
  return b
}
function zb(a) {
  if(!a.Hb && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
    for(var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0;c < b.length;c++) {
      var d = b[c];
      try {
        return new ActiveXObject(d), a.Hb = d
      }catch(f) {
      }
    }
    throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
  }
  return a.Hb
}
wb = new xb;
function L() {
  0 != Bb && (this.Hc = Error().stack, Cb[v(this)] = this)
}
var Bb = 0, Cb = {};
L.prototype.zb = !1;
L.prototype.Ja = function() {
  if(!this.zb && (this.zb = !0, this.u(), 0 != Bb)) {
    var a = v(this);
    delete Cb[a]
  }
};
L.prototype.u = function() {
  if(this.Ob) {
    for(;this.Ob.length;) {
      this.Ob.shift()()
    }
  }
};
function M(a, b) {
  this.type = a;
  this.currentTarget = this.target = b
}
p = M.prototype;
p.u = e();
p.Ja = e();
p.na = !1;
p.defaultPrevented = !1;
p.Xa = !0;
p.preventDefault = function() {
  this.defaultPrevented = !0;
  this.Xa = !1
};
var Db = 0;
function Eb() {
}
p = Eb.prototype;
p.key = 0;
p.ea = !1;
p.Ha = !1;
p.Pa = function(a, b, c, d, f, g) {
  if(ha(a)) {
    this.Jb = !0
  }else {
    if(a && a.handleEvent && ha(a.handleEvent)) {
      this.Jb = !1
    }else {
      throw Error("Invalid listener argument");
    }
  }
  this.W = a;
  this.Vb = b;
  this.src = c;
  this.type = d;
  this.capture = !!f;
  this.lb = g;
  this.Ha = !1;
  this.key = ++Db;
  this.ea = !1
};
p.handleEvent = function(a) {
  return this.Jb ? this.W.call(this.lb || this.src, a) : this.W.handleEvent.call(this.W, a)
};
var Fb = !A || A && 9 <= Ma, Gb = A && !C("9");
!B || C("528");
Aa && C("1.9b") || A && C("8") || za && C("9.5") || B && C("528");
Aa && !C("8") || A && C("9");
function Hb(a) {
  Hb[" "](a);
  return a
}
Hb[" "] = ea;
function Ib(a, b) {
  a && this.Pa(a, b)
}
y(Ib, M);
p = Ib.prototype;
p.target = null;
p.relatedTarget = null;
p.offsetX = 0;
p.offsetY = 0;
p.clientX = 0;
p.clientY = 0;
p.screenX = 0;
p.screenY = 0;
p.button = 0;
p.keyCode = 0;
p.charCode = 0;
p.ctrlKey = !1;
p.altKey = !1;
p.shiftKey = !1;
p.metaKey = !1;
p.zc = !1;
p.Ab = null;
p.Pa = function(a, b) {
  var c = this.type = a.type;
  M.call(this, c);
  this.target = a.target || a.srcElement;
  this.currentTarget = b;
  var d = a.relatedTarget;
  if(d) {
    if(Aa) {
      var f;
      a: {
        try {
          Hb(d.nodeName);
          f = !0;
          break a
        }catch(g) {
        }
        f = !1
      }
      f || (d = null)
    }
  }else {
    "mouseover" == c ? d = a.fromElement : "mouseout" == c && (d = a.toElement)
  }
  this.relatedTarget = d;
  this.offsetX = B || void 0 !== a.offsetX ? a.offsetX : a.layerX;
  this.offsetY = B || void 0 !== a.offsetY ? a.offsetY : a.layerY;
  this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX;
  this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY;
  this.screenX = a.screenX || 0;
  this.screenY = a.screenY || 0;
  this.button = a.button;
  this.keyCode = a.keyCode || 0;
  this.charCode = a.charCode || ("keypress" == c ? a.keyCode : 0);
  this.ctrlKey = a.ctrlKey;
  this.altKey = a.altKey;
  this.shiftKey = a.shiftKey;
  this.metaKey = a.metaKey;
  this.zc = Ca ? a.metaKey : a.ctrlKey;
  this.state = a.state;
  this.Ab = a;
  a.defaultPrevented && this.preventDefault();
  delete this.na
};
p.preventDefault = function() {
  Ib.ra.preventDefault.call(this);
  var a = this.Ab;
  if(a.preventDefault) {
    a.preventDefault()
  }else {
    if(a.returnValue = !1, Gb) {
      try {
        if(a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) {
          a.keyCode = -1
        }
      }catch(b) {
      }
    }
  }
};
p.u = e();
var Sa = {}, N = {}, O = {}, Jb = {};
function Kb(a, b, c, d, f) {
  if(s(b)) {
    for(var g = 0;g < b.length;g++) {
      Kb(a, b[g], c, d, f)
    }
    return null
  }
  a: {
    if(!b) {
      throw Error("Invalid event type");
    }
    d = !!d;
    var h = N;
    b in h || (h[b] = {f:0, t:0});
    h = h[b];
    d in h || (h[d] = {f:0, t:0}, h.f++);
    var h = h[d], g = v(a), m;
    h.t++;
    if(h[g]) {
      m = h[g];
      for(var k = 0;k < m.length;k++) {
        if(h = m[k], h.W == c && h.lb == f) {
          if(h.ea) {
            break
          }
          m[k].Ha = !1;
          a = m[k];
          break a
        }
      }
    }else {
      m = h[g] = [], h.f++
    }
    k = Lb();
    h = new Eb;
    h.Pa(c, k, a, b, d, f);
    h.Ha = !1;
    k.src = a;
    k.W = h;
    m.push(h);
    O[g] || (O[g] = []);
    O[g].push(h);
    a.addEventListener ? a != q && a.xb || a.addEventListener(b, k, d) : a.attachEvent(b in Jb ? Jb[b] : Jb[b] = "on" + b, k);
    a = h
  }
  b = a.key;
  Sa[b] = a;
  return b
}
function Lb() {
  var a = Mb, b = Fb ? function(c) {
    return a.call(b.src, b.W, c)
  } : function(c) {
    c = a.call(b.src, b.W, c);
    if(!c) {
      return c
    }
  };
  return b
}
function Nb(a, b, c, d, f) {
  if(s(b)) {
    for(var g = 0;g < b.length;g++) {
      Nb(a, b[g], c, d, f)
    }
  }else {
    d = !!d;
    a: {
      g = N;
      if(b in g && (g = g[b], d in g && (g = g[d], a = v(a), g[a]))) {
        a = g[a];
        break a
      }
      a = null
    }
    if(a) {
      for(g = 0;g < a.length;g++) {
        if(a[g].W == c && a[g].capture == d && a[g].lb == f) {
          Ob(a[g].key);
          break
        }
      }
    }
  }
}
function Ob(a) {
  var b = Sa[a];
  if(!b || b.ea) {
    return!1
  }
  var c = b.src, d = b.type, f = b.Vb, g = b.capture;
  c.removeEventListener ? c != q && c.xb || c.removeEventListener(d, f, g) : c.detachEvent && c.detachEvent(d in Jb ? Jb[d] : Jb[d] = "on" + d, f);
  c = v(c);
  if(O[c]) {
    var f = O[c], h = Xa(f, b);
    0 <= h && D.splice.call(f, h, 1);
    0 == f.length && delete O[c]
  }
  b.ea = !0;
  if(b = N[d][g][c]) {
    b.Nb = !0, Pb(d, g, c, b)
  }
  delete Sa[a];
  return!0
}
function Pb(a, b, c, d) {
  if(!d.Ra && d.Nb) {
    for(var f = 0, g = 0;f < d.length;f++) {
      d[f].ea ? d[f].Vb.src = null : (f != g && (d[g] = d[f]), g++)
    }
    d.length = g;
    d.Nb = !1;
    0 == g && (delete N[a][b][c], N[a][b].f--, 0 == N[a][b].f && (delete N[a][b], N[a].f--), 0 == N[a].f && delete N[a])
  }
}
function Qb(a) {
  var b = 0;
  if(null != a) {
    if(a = v(a), O[a]) {
      a = O[a];
      for(var c = a.length - 1;0 <= c;c--) {
        Ob(a[c].key), b++
      }
    }
  }else {
    Ra(function(a, c) {
      Ob(c);
      b++
    })
  }
}
function Rb(a, b, c, d, f) {
  var g = 1;
  b = v(b);
  if(a[b]) {
    var h = --a.t, m = a[b];
    m.Ra ? m.Ra++ : m.Ra = 1;
    try {
      for(var k = m.length, t = 0;t < k;t++) {
        var l = m[t];
        l && !l.ea && (g &= !1 !== Sb(l, f))
      }
    }finally {
      a.t = Math.max(h, a.t), m.Ra--, Pb(c, d, b, m)
    }
  }
  return Boolean(g)
}
function Sb(a, b) {
  a.Ha && Ob(a.key);
  return a.handleEvent(b)
}
function Mb(a, b) {
  if(a.ea) {
    return!0
  }
  var c = a.type, d = N;
  if(!(c in d)) {
    return!0
  }
  var d = d[c], f, g;
  if(!Fb) {
    f = b || da("window.event");
    var h = !0 in d, m = !1 in d;
    if(h) {
      if(0 > f.keyCode || void 0 != f.returnValue) {
        return!0
      }
      a: {
        var k = !1;
        if(0 == f.keyCode) {
          try {
            f.keyCode = -1;
            break a
          }catch(t) {
            k = !0
          }
        }
        if(k || void 0 == f.returnValue) {
          f.returnValue = !0
        }
      }
    }
    k = new Ib;
    k.Pa(f, this);
    f = !0;
    try {
      if(h) {
        for(var l = [], r = k.currentTarget;r;r = r.parentNode) {
          l.push(r)
        }
        g = d[!0];
        g.t = g.f;
        for(var G = l.length - 1;!k.na && 0 <= G && g.t;G--) {
          k.currentTarget = l[G], f &= Rb(g, l[G], c, !0, k)
        }
        if(m) {
          for(g = d[!1], g.t = g.f, G = 0;!k.na && G < l.length && g.t;G++) {
            k.currentTarget = l[G], f &= Rb(g, l[G], c, !1, k)
          }
        }
      }else {
        f = Sb(a, k)
      }
    }finally {
      l && (l.length = 0)
    }
    return f
  }
  c = new Ib(b, this);
  return f = Sb(a, c)
}
;function Tb() {
  L.call(this)
}
y(Tb, L);
p = Tb.prototype;
p.xb = !0;
p.pb = null;
p.addEventListener = function(a, b, c, d) {
  Kb(this, a, b, c, d)
};
p.removeEventListener = function(a, b, c, d) {
  Nb(this, a, b, c, d)
};
p.dispatchEvent = function(a) {
  var b = a.type || a, c = N;
  if(b in c) {
    if(u(a)) {
      a = new M(a, this)
    }else {
      if(a instanceof M) {
        a.target = a.target || this
      }else {
        var d = a;
        a = new M(b, this);
        Wa(a, d)
      }
    }
    var d = 1, f, c = c[b], b = !0 in c, g;
    if(b) {
      f = [];
      for(g = this;g;g = g.pb) {
        f.push(g)
      }
      g = c[!0];
      g.t = g.f;
      for(var h = f.length - 1;!a.na && 0 <= h && g.t;h--) {
        a.currentTarget = f[h], d &= Rb(g, f[h], a.type, !0, a) && !1 != a.Xa
      }
    }
    if(!1 in c) {
      if(g = c[!1], g.t = g.f, b) {
        for(h = 0;!a.na && h < f.length && g.t;h++) {
          a.currentTarget = f[h], d &= Rb(g, f[h], a.type, !1, a) && !1 != a.Xa
        }
      }else {
        for(f = this;!a.na && f && g.t;f = f.pb) {
          a.currentTarget = f, d &= Rb(g, f, a.type, !1, a) && !1 != a.Xa
        }
      }
    }
    a = Boolean(d)
  }else {
    a = !0
  }
  return a
};
p.u = function() {
  Tb.ra.u.call(this);
  Qb(this);
  this.pb = null
};
function Ub(a, b) {
  L.call(this);
  this.da = a || 1;
  this.Ea = b || P;
  this.fb = w(this.Fc, this);
  this.ob = x()
}
y(Ub, Tb);
Ub.prototype.enabled = !1;
var P = q;
p = Ub.prototype;
p.r = null;
p.setInterval = function(a) {
  this.da = a;
  this.r && this.enabled ? (this.stop(), this.start()) : this.r && this.stop()
};
p.Fc = function() {
  if(this.enabled) {
    var a = x() - this.ob;
    0 < a && a < 0.8 * this.da ? this.r = this.Ea.setTimeout(this.fb, this.da - a) : (this.dispatchEvent(Vb), this.enabled && (this.r = this.Ea.setTimeout(this.fb, this.da), this.ob = x()))
  }
};
p.start = function() {
  this.enabled = !0;
  this.r || (this.r = this.Ea.setTimeout(this.fb, this.da), this.ob = x())
};
p.stop = function() {
  this.enabled = !1;
  this.r && (this.Ea.clearTimeout(this.r), this.r = null)
};
p.u = function() {
  Ub.ra.u.call(this);
  this.stop();
  delete this.Ea
};
var Vb = "tick";
function Wb(a) {
  L.call(this);
  this.e = a;
  this.j = []
}
y(Wb, L);
var Xb = [];
function Yb(a, b, c, d) {
  s(c) || (Xb[0] = c, c = Xb);
  for(var f = 0;f < c.length;f++) {
    var g = Kb(b, c[f], d || a, !1, a.e || a);
    a.j.push(g)
  }
}
Wb.prototype.u = function() {
  Wb.ra.u.call(this);
  Ya(this.j, Ob);
  this.j.length = 0
};
Wb.prototype.handleEvent = function() {
  throw Error("EventHandler.handleEvent not implemented");
};
function Zb(a, b, c) {
  L.call(this);
  this.oc = a;
  this.da = b;
  this.e = c;
  this.ic = w(this.uc, this)
}
y(Zb, L);
p = Zb.prototype;
p.Ya = !1;
p.Ub = 0;
p.r = null;
p.stop = function() {
  this.r && (P.clearTimeout(this.r), this.r = null, this.Ya = !1)
};
p.u = function() {
  Zb.ra.u.call(this);
  this.stop()
};
p.uc = function() {
  this.r = null;
  this.Ya && !this.Ub && (this.Ya = !1, $b(this))
};
function $b(a) {
  var b;
  b = a.ic;
  var c = a.da;
  if(!ha(b)) {
    if(b && "function" == typeof b.handleEvent) {
      b = w(b.handleEvent, b)
    }else {
      throw Error("Invalid listener argument");
    }
  }
  b = 2147483647 < c ? -1 : P.setTimeout(b, c || 0);
  a.r = b;
  a.oc.call(a.e)
}
;function Q(a, b, c, d, f) {
  this.b = a;
  this.a = b;
  this.Z = c;
  this.B = d;
  this.Ca = f || 1;
  this.Da = ac;
  this.jb = new Wb(this);
  this.Ta = new Ub;
  this.Ta.setInterval(bc)
}
p = Q.prototype;
p.v = null;
p.J = !1;
p.ua = null;
p.sb = null;
p.pa = null;
p.sa = null;
p.T = null;
p.w = null;
p.X = null;
p.l = null;
p.Fa = 0;
p.K = null;
p.ta = null;
p.p = null;
p.h = -1;
p.Yb = !0;
p.aa = !1;
p.oa = 0;
p.Ua = null;
var ac = 45E3, bc = 250;
function cc(a, b) {
  switch(a) {
    case 0:
      return"Non-200 return code (" + b + ")";
    case 1:
      return"XMLHTTP failure (no data)";
    case 2:
      return"HttpConnection timeout";
    default:
      return"Unknown error"
  }
}
var dc = {}, ec = {};
function fc() {
  return!A || A && 10 <= Ma
}
p = Q.prototype;
p.Y = n("v");
p.setTimeout = n("Da");
p.ac = n("oa");
function gc(a, b, c) {
  a.sa = 1;
  a.T = I(b.n());
  a.X = c;
  a.yb = !0;
  hc(a, null)
}
function ic(a, b, c, d, f) {
  a.sa = 1;
  a.T = I(b.n());
  a.X = null;
  a.yb = c;
  f && (a.Yb = !1);
  hc(a, d)
}
function hc(a, b) {
  a.pa = x();
  jc(a);
  a.w = a.T.n();
  rb(a.w, "t", a.Ca);
  a.Fa = 0;
  a.l = a.b.Ia(a.b.Za() ? b : null);
  0 < a.oa && (a.Ua = new Zb(w(a.ec, a, a.l), a.oa));
  Yb(a.jb, a.l, "readystatechange", a.Bc);
  var c;
  if(a.v) {
    c = a.v;
    var d = {}, f;
    for(f in c) {
      d[f] = c[f]
    }
    c = d
  }else {
    c = {}
  }
  a.X ? (a.ta = "POST", c["Content-Type"] = "application/x-www-form-urlencoded", a.l.send(a.w, a.ta, a.X, c)) : (a.ta = "GET", a.Yb && !B && (c.Connection = "close"), a.l.send(a.w, a.ta, null, c));
  a.b.G(kc);
  if(d = a.X) {
    for(c = "", d = d.split("&"), f = 0;f < d.length;f++) {
      var g = d[f].split("=");
      if(1 < g.length) {
        var h = g[0], g = g[1], m = h.split("_");
        c = 2 <= m.length && "type" == m[1] ? c + (h + "=" + g + "&") : c + (h + "=redacted&")
      }
    }
  }else {
    c = null
  }
  a.a.info("XMLHTTP REQ (" + a.B + ") [attempt " + a.Ca + "]: " + a.ta + "\n" + a.w + "\n" + c)
}
p.Bc = function(a) {
  a = a.target;
  var b = this.Ua;
  b && 3 == R(a) ? (this.a.debug("Throttling readystatechange."), b.r || b.Ub ? b.Ya = !0 : $b(b)) : this.ec(a)
};
p.ec = function(a) {
  try {
    if(a == this.l) {
      a: {
        var b = R(this.l), c = this.l.la, d = lc(this.l);
        if(!fc() || B && !C("420+")) {
          if(4 > b) {
            break a
          }
        }else {
          if(3 > b || 3 == b && !za && !mc(this.l)) {
            break a
          }
        }
        this.aa || (4 != b || c == nc) || (c == oc || 0 >= d ? this.b.G(pc) : this.b.G(qc));
        rc(this);
        var f = lc(this.l);
        this.h = f;
        var g = mc(this.l);
        g || this.a.debug("No response text for uri " + this.w + " status " + f);
        this.J = 200 == f;
        this.a.info("XMLHTTP RESP (" + this.B + ") [ attempt " + this.Ca + "]: " + this.ta + "\n" + this.w + "\n" + b + " " + f);
        this.J ? (4 == b && S(this), this.yb ? (sc(this, b, g), za && 3 == b && (Yb(this.jb, this.Ta, Vb, this.Ac), this.Ta.start())) : (tc(this.a, this.B, g, null), uc(this, g)), this.J && !this.aa && (4 == b ? this.b.ma(this) : (this.J = !1, jc(this)))) : (400 == f && 0 < g.indexOf("Unknown SID") ? (this.p = 3, T(vc), this.a.$("XMLHTTP Unknown SID (" + this.B + ")")) : (this.p = 0, T(wc), this.a.$("XMLHTTP Bad status " + f + " (" + this.B + ")")), S(this), xc(this))
      }
    }else {
      this.a.$("Called back with an unexpected xmlhttp")
    }
  }catch(h) {
    this.a.debug("Failed call to OnXmlHttpReadyStateChanged_"), this.l && mc(this.l) ? yc(this.a, h, "ResponseText: " + mc(this.l)) : yc(this.a, h, "No response text")
  }finally {
  }
};
function sc(a, b, c) {
  for(var d = !0;!a.aa && a.Fa < c.length;) {
    var f = zc(a, c);
    if(f == ec) {
      4 == b && (a.p = 4, T(Ac), d = !1);
      tc(a.a, a.B, null, "[Incomplete Response]");
      break
    }else {
      if(f == dc) {
        a.p = 4;
        T(Bc);
        tc(a.a, a.B, c, "[Invalid Chunk]");
        d = !1;
        break
      }else {
        tc(a.a, a.B, f, null), uc(a, f)
      }
    }
  }
  4 == b && 0 == c.length && (a.p = 1, T(Cc), d = !1);
  a.J = a.J && d;
  d || (tc(a.a, a.B, c, "[Invalid Chunked Response]"), S(a), xc(a))
}
p.Ac = function() {
  var a = R(this.l), b = mc(this.l);
  this.Fa < b.length && (rc(this), sc(this, a, b), this.J && 4 != a && jc(this))
};
function zc(a, b) {
  var c = a.Fa, d = b.indexOf("\n", c);
  if(-1 == d) {
    return ec
  }
  c = Number(b.substring(c, d));
  if(isNaN(c)) {
    return dc
  }
  d += 1;
  if(d + c > b.length) {
    return ec
  }
  var f = b.substr(d, c);
  a.Fa = d + c;
  return f
}
function Dc(a, b) {
  a.pa = x();
  jc(a);
  var c = b ? window.location.hostname : "";
  a.w = a.T.n();
  H(a.w, "DOMAIN", c);
  H(a.w, "t", a.Ca);
  try {
    a.K = new ActiveXObject("htmlfile")
  }catch(d) {
    a.a.I("ActiveX blocked");
    S(a);
    a.p = 7;
    T(Ec);
    xc(a);
    return
  }
  var f = "<html><body>";
  b && (f += '<script>document.domain="' + c + '"\x3c/script>');
  f += "</body></html>";
  a.K.open();
  a.K.write(f);
  a.K.close();
  a.K.parentWindow.m = w(a.xc, a);
  a.K.parentWindow.d = w(a.Tb, a, !0);
  a.K.parentWindow.rpcClose = w(a.Tb, a, !1);
  c = a.K.createElement("div");
  a.K.parentWindow.document.body.appendChild(c);
  c.innerHTML = '<iframe src="' + a.w + '"></iframe>';
  a.a.info("TRIDENT REQ (" + a.B + ") [ attempt " + a.Ca + "]: GET\n" + a.w);
  a.b.G(kc)
}
p.xc = function(a) {
  U(w(this.wc, this, a), 0)
};
p.wc = function(a) {
  if(!this.aa) {
    var b = this.a;
    b.info("TRIDENT TEXT (" + this.B + "): " + Fc(b, a));
    rc(this);
    uc(this, a);
    jc(this)
  }
};
p.Tb = function(a) {
  U(w(this.vc, this, a), 0)
};
p.vc = function(a) {
  this.aa || (this.a.info("TRIDENT TEXT (" + this.B + "): " + a ? "success" : "failure"), S(this), this.J = a, this.b.ma(this), this.b.G(Gc))
};
p.mc = function() {
  rc(this);
  this.b.ma(this)
};
p.cancel = function() {
  this.aa = !0;
  S(this)
};
function jc(a) {
  a.sb = x() + a.Da;
  Hc(a, a.Da)
}
function Hc(a, b) {
  if(null != a.ua) {
    throw Error("WatchDog timer not null");
  }
  a.ua = U(w(a.yc, a), b)
}
function rc(a) {
  a.ua && (q.clearTimeout(a.ua), a.ua = null)
}
p.yc = function() {
  this.ua = null;
  var a = x();
  0 <= a - this.sb ? (this.J && this.a.I("Received watchdog timeout even though request loaded successfully"), this.a.info("TIMEOUT: " + this.w), 2 != this.sa && this.b.G(pc), S(this), this.p = 2, T(Ic), xc(this)) : (this.a.$("WatchDog timer called too early"), Hc(this, this.sb - a))
};
function xc(a) {
  a.b.Ib() || a.aa || a.b.ma(a)
}
function S(a) {
  rc(a);
  var b = a.Ua;
  b && "function" == typeof b.Ja && b.Ja();
  a.Ua = null;
  a.Ta.stop();
  b = a.jb;
  Ya(b.j, Ob);
  b.j.length = 0;
  a.l && (b = a.l, a.l = null, b.abort(), b.Ja());
  a.K && (a.K = null)
}
p.Fb = aa("p");
function uc(a, b) {
  try {
    a.b.Qb(a, b), a.b.G(Gc)
  }catch(c) {
    yc(a.a, c, "Error in httprequest callback")
  }
}
;function Jc(a) {
  a = String(a);
  if(/^\s*$/.test(a) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))) {
    try {
      return eval("(" + a + ")")
    }catch(b) {
    }
  }
  throw Error("Invalid JSON string: " + a);
}
function Kc(a) {
  return eval("(" + a + ")")
}
function Lc(a) {
  var b = [];
  Mc(new Nc(void 0), a, b);
  return b.join("")
}
function Nc(a) {
  this.Wa = a
}
function Mc(a, b, c) {
  switch(typeof b) {
    case "string":
      Oc(b, c);
      break;
    case "number":
      c.push(isFinite(b) && !isNaN(b) ? b : "null");
      break;
    case "boolean":
      c.push(b);
      break;
    case "undefined":
      c.push("null");
      break;
    case "object":
      if(null == b) {
        c.push("null");
        break
      }
      if(s(b)) {
        var d = b.length;
        c.push("[");
        for(var f = "", g = 0;g < d;g++) {
          c.push(f), f = b[g], Mc(a, a.Wa ? a.Wa.call(b, String(g), f) : f, c), f = ","
        }
        c.push("]");
        break
      }
      c.push("{");
      d = "";
      for(g in b) {
        Object.prototype.hasOwnProperty.call(b, g) && (f = b[g], "function" != typeof f && (c.push(d), Oc(g, c), c.push(":"), Mc(a, a.Wa ? a.Wa.call(b, g, f) : f, c), d = ","))
      }
      c.push("}");
      break;
    case "function":
      break;
    default:
      throw Error("Unknown type: " + typeof b);
  }
}
var Pc = {'"':'\\"', "\\":"\\\\", "/":"\\/", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t", "\x0B":"\\u000b"}, Qc = /\uffff/.test("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g;
function Oc(a, b) {
  b.push('"', a.replace(Qc, function(a) {
    if(a in Pc) {
      return Pc[a]
    }
    var b = a.charCodeAt(0), f = "\\u";
    16 > b ? f += "000" : 256 > b ? f += "00" : 4096 > b && (f += "0");
    return Pc[a] = f + b.toString(16)
  }), '"')
}
;function Rc(a) {
  return Sc(a || arguments.callee.caller, [])
}
function Sc(a, b) {
  var c = [];
  if(0 <= Xa(b, a)) {
    c.push("[...circular reference...]")
  }else {
    if(a && 50 > b.length) {
      c.push(Tc(a) + "(");
      for(var d = a.arguments, f = 0;f < d.length;f++) {
        0 < f && c.push(", ");
        var g;
        g = d[f];
        switch(typeof g) {
          case "object":
            g = g ? "object" : "null";
            break;
          case "string":
            break;
          case "number":
            g = String(g);
            break;
          case "boolean":
            g = g ? "true" : "false";
            break;
          case "function":
            g = (g = Tc(g)) ? g : "[fn]";
            break;
          default:
            g = typeof g
        }
        40 < g.length && (g = g.substr(0, 40) + "...");
        c.push(g)
      }
      b.push(a);
      c.push(")\n");
      try {
        c.push(Sc(a.caller, b))
      }catch(h) {
        c.push("[exception trying to get caller]\n")
      }
    }else {
      a ? c.push("[...long stack...]") : c.push("[end]")
    }
  }
  return c.join("")
}
function Tc(a) {
  if(Uc[a]) {
    return Uc[a]
  }
  a = String(a);
  if(!Uc[a]) {
    var b = /function ([^\(]+)/.exec(a);
    Uc[a] = b ? b[1] : "[Anonymous]"
  }
  return Uc[a]
}
var Uc = {};
function Vc(a, b, c, d, f) {
  this.reset(a, b, c, d, f)
}
Vc.prototype.Dc = 0;
Vc.prototype.Cb = null;
Vc.prototype.Bb = null;
var Wc = 0;
Vc.prototype.reset = function(a, b, c, d, f) {
  this.Dc = "number" == typeof f ? f : Wc++;
  this.Rc = d || x();
  this.za = a;
  this.pc = b;
  this.Jc = c;
  delete this.Cb;
  delete this.Bb
};
Vc.prototype.Zb = n("za");
function V(a) {
  this.qc = a
}
V.prototype.Sa = null;
V.prototype.za = null;
V.prototype.gb = null;
V.prototype.Gb = null;
function Xc(a, b) {
  this.name = a;
  this.value = b
}
Xc.prototype.toString = aa("name");
var Yc = new Xc("SEVERE", 1E3), Zc = new Xc("WARNING", 900), $c = new Xc("INFO", 800), ad = new Xc("CONFIG", 700), bd = new Xc("FINE", 500);
p = V.prototype;
p.getParent = aa("Sa");
p.Zb = n("za");
function cd(a) {
  if(a.za) {
    return a.za
  }
  if(a.Sa) {
    return cd(a.Sa)
  }
  Pa("Root logger has no level set.");
  return null
}
p.log = function(a, b, c) {
  if(a.value >= cd(this).value) {
    for(a = this.lc(a, b, c), b = "log:" + a.pc, q.console && (q.console.timeStamp ? q.console.timeStamp(b) : q.console.markTimeline && q.console.markTimeline(b)), q.msWriteProfilerMark && q.msWriteProfilerMark(b), b = this;b;) {
      c = b;
      var d = a;
      if(c.Gb) {
        for(var f = 0, g = void 0;g = c.Gb[f];f++) {
          g(d)
        }
      }
      b = b.getParent()
    }
  }
};
p.lc = function(a, b, c) {
  var d = new Vc(a, String(b), this.qc);
  if(c) {
    d.Cb = c;
    var f;
    var g = arguments.callee.caller;
    try {
      var h;
      var m = da("window.location.href");
      if(u(c)) {
        h = {message:c, name:"Unknown error", lineNumber:"Not available", fileName:m, stack:"Not available"}
      }else {
        var k, t, l = !1;
        try {
          k = c.lineNumber || c.Ic || "Not available"
        }catch(r) {
          k = "Not available", l = !0
        }
        try {
          t = c.fileName || c.filename || c.sourceURL || q.$googDebugFname || m
        }catch(G) {
          t = "Not available", l = !0
        }
        h = !l && c.lineNumber && c.fileName && c.stack ? c : {message:c.message, name:c.name, lineNumber:k, fileName:t, stack:c.stack || "Not available"}
      }
      f = "Message: " + na(h.message) + '\nUrl: <a href="view-source:' + h.fileName + '" target="_new">' + h.fileName + "</a>\nLine: " + h.lineNumber + "\n\nBrowser stack:\n" + na(h.stack + "-> ") + "[end]\n\nJS stack traversal:\n" + na(Rc(g) + "-> ")
    }catch(Vd) {
      f = "Exception trying to expose exception! You win, we lose. " + Vd
    }
    d.Bb = f
  }
  return d
};
p.I = function(a, b) {
  this.log(Yc, a, b)
};
p.$ = function(a, b) {
  this.log(Zc, a, b)
};
p.info = function(a, b) {
  this.log($c, a, b)
};
function W(a, b) {
  a.log(bd, b, void 0)
}
var dd = {}, ed = null;
function fd(a) {
  ed || (ed = new V(""), dd[""] = ed, ed.Zb(ad));
  var b;
  if(!(b = dd[a])) {
    b = new V(a);
    var c = a.lastIndexOf("."), d = a.substr(c + 1), c = fd(a.substr(0, c));
    c.gb || (c.gb = {});
    c.gb[d] = b;
    b.Sa = c;
    dd[a] = b
  }
  return b
}
;function X() {
  this.q = fd("goog.net.BrowserChannel")
}
function tc(a, b, c, d) {
  a.info("XMLHTTP TEXT (" + b + "): " + Fc(a, c) + (d ? " " + d : ""))
}
X.prototype.debug = function(a) {
  this.info(a)
};
function yc(a, b, c) {
  a.I((c || "Exception") + b)
}
X.prototype.info = function(a) {
  this.q.info(a)
};
X.prototype.$ = function(a) {
  this.q.$(a)
};
X.prototype.I = function(a) {
  this.q.I(a)
};
function Fc(a, b) {
  if(!b || b == gd) {
    return b
  }
  try {
    var c = Kc(b);
    if(c) {
      for(var d = 0;d < c.length;d++) {
        if(s(c[d])) {
          var f = c[d];
          if(!(2 > f.length)) {
            var g = f[1];
            if(s(g) && !(1 > g.length)) {
              var h = g[0];
              if("noop" != h && "stop" != h) {
                for(var m = 1;m < g.length;m++) {
                  g[m] = ""
                }
              }
            }
          }
        }
      }
    }
    return Lc(c)
  }catch(k) {
    return a.debug("Exception parsing expected JS array - probably was not JS"), b
  }
}
;function hd(a, b) {
  this.Pc = new Nc(a);
  this.P = b ? Kc : Jc
}
hd.prototype.parse = function(a) {
  return this.P(a)
};
var nc = 7, oc = 8;
function id(a) {
  L.call(this);
  this.headers = new cb;
  this.va = a || null
}
y(id, Tb);
id.prototype.q = fd("goog.net.XhrIo");
var jd = /^https?$/i;
p = id.prototype;
p.S = !1;
p.g = null;
p.cb = null;
p.Qa = "";
p.Kb = "";
p.la = 0;
p.p = "";
p.ib = !1;
p.Oa = !1;
p.mb = !1;
p.ca = !1;
p.ab = 0;
p.fa = null;
p.Xb = "";
p.dc = !1;
p.send = function(a, b, c, d) {
  if(this.g) {
    throw Error("[goog.net.XhrIo] Object is active with another request=" + this.Qa + "; newUri=" + a);
  }
  b = b ? b.toUpperCase() : "GET";
  this.Qa = a;
  this.p = "";
  this.la = 0;
  this.Kb = b;
  this.ib = !1;
  this.S = !0;
  this.g = this.wb();
  this.cb = this.va ? this.va.Ga || (this.va.Ga = Ab(this.va)) : wb.Ga || (wb.Ga = Ab(wb));
  this.g.onreadystatechange = w(this.Pb, this);
  try {
    W(this.q, Y(this, "Opening Xhr")), this.mb = !0, this.g.open(b, a, !0), this.mb = !1
  }catch(f) {
    W(this.q, Y(this, "Error opening Xhr: " + f.message));
    kd(this, f);
    return
  }
  a = c || "";
  var g = this.headers.n();
  d && bb(d, function(a, b) {
    g.set(b, a)
  });
  d = q.FormData && a instanceof q.FormData;
  "POST" != b || (g.ia("Content-Type") || d) || g.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
  bb(g, function(a, b) {
    this.g.setRequestHeader(b, a)
  }, this);
  this.Xb && (this.g.responseType = this.Xb);
  "withCredentials" in this.g && (this.g.withCredentials = this.dc);
  try {
    this.fa && (P.clearTimeout(this.fa), this.fa = null), 0 < this.ab && (W(this.q, Y(this, "Will abort after " + this.ab + "ms if incomplete")), this.fa = P.setTimeout(w(this.Da, this), this.ab)), W(this.q, Y(this, "Sending request")), this.Oa = !0, this.g.send(a), this.Oa = !1
  }catch(h) {
    W(this.q, Y(this, "Send error: " + h.message)), kd(this, h)
  }
};
p.wb = function() {
  return this.va ? yb(this.va) : yb(wb)
};
p.Da = function() {
  "undefined" != typeof ca && this.g && (this.p = "Timed out after " + this.ab + "ms, aborting", this.la = oc, W(this.q, Y(this, this.p)), this.dispatchEvent("timeout"), this.abort(oc))
};
function kd(a, b) {
  a.S = !1;
  a.g && (a.ca = !0, a.g.abort(), a.ca = !1);
  a.p = b;
  a.la = 5;
  ld(a);
  md(a)
}
function ld(a) {
  a.ib || (a.ib = !0, a.dispatchEvent("complete"), a.dispatchEvent("error"))
}
p.abort = function(a) {
  this.g && this.S && (W(this.q, Y(this, "Aborting")), this.S = !1, this.ca = !0, this.g.abort(), this.ca = !1, this.la = a || nc, this.dispatchEvent("complete"), this.dispatchEvent("abort"), md(this))
};
p.u = function() {
  this.g && (this.S && (this.S = !1, this.ca = !0, this.g.abort(), this.ca = !1), md(this, !0));
  id.ra.u.call(this)
};
p.Pb = function() {
  this.mb || this.Oa || this.ca ? nd(this) : this.tc()
};
p.tc = function() {
  nd(this)
};
function nd(a) {
  if(a.S && "undefined" != typeof ca) {
    if(a.cb[1] && 4 == R(a) && 2 == lc(a)) {
      W(a.q, Y(a, "Local request error detected and ignored"))
    }else {
      if(a.Oa && 4 == R(a)) {
        P.setTimeout(w(a.Pb, a), 0)
      }else {
        if(a.dispatchEvent("readystatechange"), 4 == R(a)) {
          W(a.q, Y(a, "Request complete"));
          a.S = !1;
          try {
            var b = lc(a), c, d;
            a: {
              switch(b) {
                case 200:
                ;
                case 201:
                ;
                case 202:
                ;
                case 204:
                ;
                case 206:
                ;
                case 304:
                ;
                case 1223:
                  d = !0;
                  break a;
                default:
                  d = !1
              }
            }
            if(!(c = d)) {
              var f;
              if(f = 0 === b) {
                var g = String(a.Qa).match(Qa)[1] || null;
                if(!g && self.location) {
                  var h = self.location.protocol, g = h.substr(0, h.length - 1)
                }
                f = !jd.test(g ? g.toLowerCase() : "")
              }
              c = f
            }
            if(c) {
              a.dispatchEvent("complete"), a.dispatchEvent("success")
            }else {
              a.la = 6;
              var m;
              try {
                m = 2 < R(a) ? a.g.statusText : ""
              }catch(k) {
                W(a.q, "Can not get status: " + k.message), m = ""
              }
              a.p = m + " [" + lc(a) + "]";
              ld(a)
            }
          }finally {
            md(a)
          }
        }
      }
    }
  }
}
function md(a, b) {
  if(a.g) {
    var c = a.g, d = a.cb[0] ? ea : null;
    a.g = null;
    a.cb = null;
    a.fa && (P.clearTimeout(a.fa), a.fa = null);
    b || a.dispatchEvent("ready");
    try {
      c.onreadystatechange = d
    }catch(f) {
      a.q.I("Problem encountered resetting onreadystatechange: " + f.message)
    }
  }
}
p.isActive = function() {
  return!!this.g
};
function R(a) {
  return a.g ? a.g.readyState : 0
}
function lc(a) {
  try {
    return 2 < R(a) ? a.g.status : -1
  }catch(b) {
    return a.q.$("Can not get status: " + b.message), -1
  }
}
function mc(a) {
  try {
    return a.g ? a.g.responseText : ""
  }catch(b) {
    return W(a.q, "Can not get responseText: " + b.message), ""
  }
}
p.Fb = function() {
  return u(this.p) ? this.p : String(this.p)
};
function Y(a, b) {
  return b + " [" + a.Kb + " " + a.Qa + " " + lc(a) + "]"
}
;function od() {
  this.Wb = x()
}
new od;
od.prototype.set = n("Wb");
od.prototype.reset = function() {
  this.set(x())
};
od.prototype.get = aa("Wb");
function pd(a, b, c, d, f) {
  (new X).debug("TestLoadImageWithRetries: " + f);
  if(0 == d) {
    c(!1)
  }else {
    var g = f || 0;
    d--;
    qd(a, b, function(f) {
      f ? c(!0) : q.setTimeout(function() {
        pd(a, b, c, d, g)
      }, g)
    })
  }
}
function qd(a, b, c) {
  function d(a, b) {
    return function() {
      try {
        f.debug("TestLoadImage: " + b), g.onload = null, g.onerror = null, g.onabort = null, g.ontimeout = null, q.clearTimeout(h), c(a)
      }catch(d) {
        yc(f, d)
      }
    }
  }
  var f = new X;
  f.debug("TestLoadImage: loading " + a);
  var g = new Image, h = null;
  g.onload = d(!0, "loaded");
  g.onerror = d(!1, "error");
  g.onabort = d(!1, "abort");
  g.ontimeout = d(!1, "timeout");
  h = q.setTimeout(function() {
    if(g.ontimeout) {
      g.ontimeout()
    }
  }, b);
  g.src = a
}
;function rd(a, b) {
  this.b = a;
  this.a = b;
  this.P = new hd(null, !0)
}
p = rd.prototype;
p.v = null;
p.A = null;
p.Va = !1;
p.bc = null;
p.La = null;
p.nb = null;
p.H = null;
p.c = null;
p.h = -1;
p.L = null;
p.wa = null;
p.Y = n("v");
p.$b = n("P");
p.hb = function(a) {
  this.H = a;
  a = sd(this.b, this.H);
  T(td);
  this.bc = x();
  var b = this.b.Db;
  null != b ? (this.L = this.b.correctHostPrefix(b[0]), (this.wa = b[1]) ? (this.c = 1, ud(this)) : (this.c = 2, vd(this))) : (rb(a, "MODE", "init"), this.A = new Q(this, this.a, void 0, void 0, void 0), this.A.Y(this.v), ic(this.A, a, !1, null, !0), this.c = 0)
};
function ud(a) {
  var b = wd(a.b, a.wa, "/mail/images/cleardot.gif");
  I(b);
  pd(b.toString(), 5E3, w(a.jc, a), 3, 2E3);
  a.G(kc)
}
p.jc = function(a) {
  if(a) {
    this.c = 2, vd(this)
  }else {
    T(xd);
    var b = this.b;
    b.a.debug("Test Connection Blocked");
    b.h = b.U.h;
    Z(b, 9)
  }
  a && this.G(qc)
};
function vd(a) {
  a.a.debug("TestConnection: starting stage 2");
  a.A = new Q(a, a.a, void 0, void 0, void 0);
  a.A.Y(a.v);
  var b = yd(a.b, a.L, a.H);
  T(zd);
  if(fc()) {
    rb(b, "TYPE", "xmlhttp"), ic(a.A, b, !1, a.L, !1)
  }else {
    rb(b, "TYPE", "html");
    var c = a.A;
    a = Boolean(a.L);
    c.sa = 3;
    c.T = I(b.n());
    Dc(c, a)
  }
}
p.Ia = function(a) {
  return this.b.Ia(a)
};
p.abort = function() {
  this.A && (this.A.cancel(), this.A = null);
  this.h = -1
};
p.Ib = ba(!1);
p.Qb = function(a, b) {
  this.h = a.h;
  if(0 == this.c) {
    if(this.a.debug("TestConnection: Got data for stage 1"), b) {
      try {
        var c = this.P.parse(b)
      }catch(d) {
        yc(this.a, d);
        Ad(this.b, this);
        return
      }
      this.L = this.b.correctHostPrefix(c[0]);
      this.wa = c[1]
    }else {
      this.a.debug("TestConnection: Null responseText"), Ad(this.b, this)
    }
  }else {
    if(2 == this.c) {
      if(this.Va) {
        T(Bd), this.nb = x()
      }else {
        if("11111" == b) {
          if(T(Cd), this.Va = !0, this.La = x(), c = this.La - this.bc, fc() || 500 > c) {
            this.h = 200, this.A.cancel(), this.a.debug("Test connection succeeded; using streaming connection"), T(Dd), Ed(this.b, this, !0)
          }
        }else {
          T(Fd), this.La = this.nb = x(), this.Va = !1
        }
      }
    }
  }
};
p.ma = function() {
  this.h = this.A.h;
  if(!this.A.J) {
    this.a.debug("TestConnection: request failed, in state " + this.c), 0 == this.c ? T(Gd) : 2 == this.c && T(Hd), Ad(this.b, this)
  }else {
    if(0 == this.c) {
      this.a.debug("TestConnection: request complete for initial check"), this.wa ? (this.c = 1, ud(this)) : (this.c = 2, vd(this))
    }else {
      if(2 == this.c) {
        this.a.debug("TestConnection: request complete for stage 2");
        var a = !1;
        (a = fc() ? this.Va : 200 > this.nb - this.La ? !1 : !0) ? (this.a.debug("Test connection succeeded; using streaming connection"), T(Dd), Ed(this.b, this, !0)) : (this.a.debug("Test connection failed; not using streaming"), T(Id), Ed(this.b, this, !1))
      }
    }
  }
};
p.Za = function() {
  return this.b.Za()
};
p.isActive = function() {
  return this.b.isActive()
};
p.G = function(a) {
  this.b.G(a)
};
function Jd(a, b) {
  this.vb = a || null;
  this.c = Kd;
  this.s = [];
  this.Q = [];
  this.a = new X;
  this.P = new hd(null, !0);
  this.Db = b || null
}
function Ld(a, b) {
  this.Mb = a;
  this.map = b;
  this.Gc = null
}
p = Jd.prototype;
p.v = null;
p.xa = null;
p.o = null;
p.k = null;
p.H = null;
p.Ma = null;
p.ub = null;
p.L = null;
p.gc = !0;
p.Aa = 0;
p.rc = 0;
p.Ka = !1;
p.e = null;
p.F = null;
p.M = null;
p.ba = null;
p.U = null;
p.rb = null;
p.fc = !0;
p.ya = -1;
p.Lb = -1;
p.h = -1;
p.V = 0;
p.ga = 0;
p.hc = 5E3;
p.Cc = 1E4;
p.kb = 2;
p.Eb = 2E4;
p.oa = 0;
p.$a = !1;
p.ha = 8;
var Kd = 1, Md = new Tb;
function Nd(a, b) {
  M.call(this, "statevent", a);
  this.Qc = b
}
y(Nd, M);
function Od(a, b, c, d) {
  M.call(this, "timingevent", a);
  this.size = b;
  this.Oc = c;
  this.Nc = d
}
y(Od, M);
var kc = 1, qc = 2, pc = 3, Gc = 4;
function Pd(a, b) {
  M.call(this, "serverreachability", a);
  this.Mc = b
}
y(Pd, M);
var td = 3, xd = 4, zd = 5, Cd = 6, Bd = 7, Fd = 8, Gd = 9, Hd = 10, Id = 11, Dd = 12, vc = 13, wc = 14, Ac = 15, Bc = 16, Cc = 17, Ic = 18, Ec = 22, gd = "y2f%";
p = Jd.prototype;
p.hb = function(a, b, c, d, f) {
  this.a.debug("connect()");
  T(0);
  this.H = b;
  this.xa = c || {};
  d && void 0 !== f && (this.xa.OSID = d, this.xa.OAID = f);
  this.a.debug("connectTest_()");
  Qd(this) && (this.U = new rd(this, this.a), this.U.Y(this.v), this.U.$b(this.P), this.U.hb(a))
};
p.disconnect = function() {
  this.a.debug("disconnect()");
  Rd(this);
  if(3 == this.c) {
    var a = this.Aa++, b = this.Ma.n();
    H(b, "SID", this.Z);
    H(b, "RID", a);
    H(b, "TYPE", "terminate");
    Sd(this, b);
    a = new Q(this, this.a, this.Z, a, void 0);
    a.sa = 2;
    a.T = I(b.n());
    b = new Image;
    b.src = a.T;
    b.onload = b.onerror = w(a.mc, a);
    a.pa = x();
    jc(a)
  }
  Td(this)
};
function Rd(a) {
  a.U && (a.U.abort(), a.U = null);
  a.k && (a.k.cancel(), a.k = null);
  a.M && (q.clearTimeout(a.M), a.M = null);
  Ud(a);
  a.o && (a.o.cancel(), a.o = null);
  a.F && (q.clearTimeout(a.F), a.F = null)
}
p.Y = n("v");
p.ac = n("oa");
p.Ib = function() {
  return 0 == this.c
};
p.$b = n("P");
function Wd(a) {
  a.o || a.F || (a.F = U(w(a.Sb, a), 0), a.V = 0)
}
p.Sb = function(a) {
  this.F = null;
  this.a.debug("startForwardChannel_");
  if(Qd(this)) {
    if(this.c == Kd) {
      if(a) {
        this.a.I("Not supposed to retry the open")
      }else {
        this.a.debug("open_()");
        this.Aa = Math.floor(1E5 * Math.random());
        a = this.Aa++;
        var b = new Q(this, this.a, "", a, void 0);
        b.Y(this.v);
        var c = Xd(this), d = this.Ma.n();
        H(d, "RID", a);
        this.vb && H(d, "CVER", this.vb);
        Sd(this, d);
        gc(b, d, c);
        this.o = b;
        this.c = 2
      }
    }else {
      3 == this.c && (a ? Yd(this, a) : 0 == this.s.length ? this.a.debug("startForwardChannel_ returned: nothing to send") : this.o ? this.a.I("startForwardChannel_ returned: connection already in progress") : (Yd(this), this.a.debug("startForwardChannel_ finished, sent request")))
    }
  }
};
function Yd(a, b) {
  var c, d;
  b ? 6 < a.ha ? (a.s = a.Q.concat(a.s), a.Q.length = 0, c = a.Aa - 1, d = Xd(a)) : (c = b.B, d = b.X) : (c = a.Aa++, d = Xd(a));
  var f = a.Ma.n();
  H(f, "SID", a.Z);
  H(f, "RID", c);
  H(f, "AID", a.ya);
  Sd(a, f);
  c = new Q(a, a.a, a.Z, c, a.V + 1);
  c.Y(a.v);
  c.setTimeout(Math.round(0.5 * a.Eb) + Math.round(0.5 * a.Eb * Math.random()));
  a.o = c;
  gc(c, f, d)
}
function Sd(a, b) {
  if(a.e) {
    var c = a.e.getAdditionalParams(a);
    c && bb(c, function(a, c) {
      H(b, c, a)
    })
  }
}
function Xd(a) {
  var b = Math.min(a.s.length, 1E3), c = ["count=" + b], d;
  6 < a.ha && 0 < b ? (d = a.s[0].Mb, c.push("ofs=" + d)) : d = 0;
  for(var f = 0;f < b;f++) {
    var g = a.s[f].Mb, h = a.s[f].map, g = 6 >= a.ha ? f : g - d;
    try {
      bb(h, function(a, b) {
        c.push("req" + g + "_" + b + "=" + encodeURIComponent(a))
      })
    }catch(m) {
      c.push("req" + g + "_type=" + encodeURIComponent("_badmap")), a.e && a.e.badMapError(a, h)
    }
  }
  a.Q = a.Q.concat(a.s.splice(0, b));
  return c.join("&")
}
function Zd(a) {
  a.k || a.M || (a.tb = 1, a.M = U(w(a.Rb, a), 0), a.ga = 0)
}
function $d(a) {
  if(a.k || a.M) {
    return a.a.I("Request already in progress"), !1
  }
  if(3 <= a.ga) {
    return!1
  }
  a.a.debug("Going to retry GET");
  a.tb++;
  a.M = U(w(a.Rb, a), ae(a, a.ga));
  a.ga++;
  return!0
}
p.Rb = function() {
  this.M = null;
  if(Qd(this)) {
    this.a.debug("Creating new HttpRequest");
    this.k = new Q(this, this.a, this.Z, "rpc", this.tb);
    this.k.Y(this.v);
    this.k.ac(this.oa);
    var a = this.ub.n();
    H(a, "RID", "rpc");
    H(a, "SID", this.Z);
    H(a, "CI", this.rb ? "0" : "1");
    H(a, "AID", this.ya);
    Sd(this, a);
    if(fc()) {
      H(a, "TYPE", "xmlhttp"), ic(this.k, a, !0, this.L, !1)
    }else {
      H(a, "TYPE", "html");
      var b = this.k, c = Boolean(this.L);
      b.sa = 3;
      b.T = I(a.n());
      Dc(b, c)
    }
    this.a.debug("New Request created")
  }
};
function Qd(a) {
  if(a.e) {
    var b = a.e.okToMakeRequest(a);
    if(0 != b) {
      return a.a.debug("Handler returned error code from okToMakeRequest"), Z(a, b), !1
    }
  }
  return!0
}
function Ed(a, b, c) {
  a.a.debug("Test Connection Finished");
  a.rb = a.fc && c;
  a.h = b.h;
  a.a.debug("connectChannel_()");
  a.kc(Kd, 0);
  a.Ma = sd(a, a.H);
  Wd(a)
}
function Ad(a, b) {
  a.a.debug("Test Connection Failed");
  a.h = b.h;
  Z(a, 2)
}
p.Qb = function(a, b) {
  if(0 != this.c && (this.k == a || this.o == a)) {
    if(this.h = a.h, this.o == a && 3 == this.c) {
      if(7 < this.ha) {
        var c;
        try {
          c = this.P.parse(b)
        }catch(d) {
          c = null
        }
        if(s(c) && 3 == c.length) {
          var f = c;
          if(0 == f[0]) {
            a: {
              if(this.a.debug("Server claims our backchannel is missing."), this.M) {
                this.a.debug("But we are currently starting the request.")
              }else {
                if(this.k) {
                  if(this.k.pa + 3E3 < this.o.pa) {
                    Ud(this), this.k.cancel(), this.k = null
                  }else {
                    break a
                  }
                }else {
                  this.a.$("We do not have a BackChannel established")
                }
                $d(this);
                T(19)
              }
            }
          }else {
            this.Lb = f[1], c = this.Lb - this.ya, 0 < c && (f = f[2], this.a.debug(f + " bytes (in " + c + " arrays) are outstanding on the BackChannel"), 37500 > f && (this.rb && 0 == this.ga) && !this.ba && (this.ba = U(w(this.sc, this), 6E3)))
          }
        }else {
          this.a.debug("Bad POST response data returned"), Z(this, 11)
        }
      }else {
        b != gd && (this.a.debug("Bad data returned - missing/invald magic cookie"), Z(this, 11))
      }
    }else {
      if(this.k == a && Ud(this), !/^[\s\xa0]*$/.test(b)) {
        c = this.P.parse(b);
        for(var f = this.e && this.e.channelHandleMultipleArrays ? [] : null, g = 0;g < c.length;g++) {
          var h = c[g];
          this.ya = h[0];
          h = h[1];
          2 == this.c ? "c" == h[0] ? (this.Z = h[1], this.L = this.correctHostPrefix(h[2]), h = h[3], this.ha = null != h ? h : 6, this.c = 3, this.e && this.e.channelOpened(this), this.ub = yd(this, this.L, this.H), Zd(this)) : "stop" == h[0] && Z(this, 7) : 3 == this.c && ("stop" == h[0] ? (f && f.length && (this.e.channelHandleMultipleArrays(this, f), f.length = 0), Z(this, 7)) : "noop" != h[0] && (f ? f.push(h) : this.e && this.e.channelHandleArray(this, h)), this.ga = 0)
        }
        f && f.length && this.e.channelHandleMultipleArrays(this, f)
      }
    }
  }
};
p.correctHostPrefix = function(a) {
  return this.gc ? this.e ? this.e.correctHostPrefix(a) : a : null
};
p.sc = function() {
  null != this.ba && (this.ba = null, this.k.cancel(), this.k = null, $d(this), T(20))
};
function Ud(a) {
  null != a.ba && (q.clearTimeout(a.ba), a.ba = null)
}
p.ma = function(a) {
  this.a.debug("Request complete");
  var b;
  if(this.k == a) {
    Ud(this), this.k = null, b = 2
  }else {
    if(this.o == a) {
      this.o = null, b = 1
    }else {
      return
    }
  }
  this.h = a.h;
  if(0 != this.c) {
    if(a.J) {
      1 == b ? (b = x() - a.pa, Md.dispatchEvent(new Od(Md, a.X ? a.X.length : 0, b, this.V)), Wd(this), this.Q.length = 0) : Zd(this)
    }else {
      var c = a.Fb();
      if(3 == c || 7 == c || 0 == c && 0 < this.h) {
        this.a.debug("Not retrying due to error type")
      }else {
        this.a.debug("Maybe retrying, last error: " + cc(c, this.h));
        var d;
        if(d = 1 == b) {
          this.o || this.F ? (this.a.I("Request already in progress"), d = !1) : this.c == Kd || this.V >= (this.Ka ? 0 : this.kb) ? d = !1 : (this.a.debug("Going to retry POST"), this.F = U(w(this.Sb, this, a), ae(this, this.V)), this.V++, d = !0)
        }
        if(d || 2 == b && $d(this)) {
          return
        }
        this.a.debug("Exceeded max number of retries")
      }
      this.a.debug("Error: HTTP request failed");
      switch(c) {
        case 1:
          Z(this, 5);
          break;
        case 4:
          Z(this, 10);
          break;
        case 3:
          Z(this, 6);
          break;
        case 7:
          Z(this, 12);
          break;
        default:
          Z(this, 2)
      }
    }
  }
};
function ae(a, b) {
  var c = a.hc + Math.floor(Math.random() * a.Cc);
  a.isActive() || (a.a.debug("Inactive channel"), c *= 2);
  return c * b
}
p.kc = function(a) {
  if(!(0 <= Xa(arguments, this.c))) {
    throw Error("Unexpected channel state: " + this.c);
  }
};
function Z(a, b) {
  a.a.info("Error code " + b);
  if(2 == b || 9 == b) {
    var c = null;
    a.e && (c = a.e.getNetworkTestImageUri(a));
    var d = w(a.Ec, a);
    c || (c = new E("//www.google.com/images/cleardot.gif"), I(c));
    qd(c.toString(), 1E4, d)
  }else {
    T(2)
  }
  be(a, b)
}
p.Ec = function(a) {
  a ? (this.a.info("Successfully pinged google.com"), T(2)) : (this.a.info("Failed to ping google.com"), T(1), be(this, 8))
};
function be(a, b) {
  a.a.debug("HttpChannel: error - " + b);
  a.c = 0;
  a.e && a.e.channelError(a, b);
  Td(a);
  Rd(a)
}
function Td(a) {
  a.c = 0;
  a.h = -1;
  if(a.e) {
    if(0 == a.Q.length && 0 == a.s.length) {
      a.e.channelClosed(a)
    }else {
      a.a.debug("Number of undelivered maps, pending: " + a.Q.length + ", outgoing: " + a.s.length);
      var b = $a(a.Q), c = $a(a.s);
      a.Q.length = 0;
      a.s.length = 0;
      a.e.channelClosed(a, b, c)
    }
  }
}
function sd(a, b) {
  var c = wd(a, null, b);
  a.a.debug("GetForwardChannelUri: " + c);
  return c
}
function yd(a, b, c) {
  b = wd(a, a.Za() ? b : null, c);
  a.a.debug("GetBackChannelUri: " + b);
  return b
}
function wd(a, b, c) {
  var d = c instanceof E ? c.n() : new E(c, void 0);
  if("" != d.ja) {
    b && gb(d, b + "." + d.ja), hb(d, d.Ba)
  }else {
    var f = window.location, d = tb(f.protocol, b ? b + "." + f.hostname : f.hostname, f.port, c)
  }
  a.xa && bb(a.xa, function(a, b) {
    H(d, b, a)
  });
  H(d, "VER", a.ha);
  Sd(a, d);
  return d
}
p.Ia = function(a) {
  if(a && !this.$a) {
    throw Error("Can't create secondary domain capable XhrIo object.");
  }
  a = new id;
  a.dc = this.$a;
  return a
};
p.isActive = function() {
  return!!this.e && this.e.isActive(this)
};
function U(a, b) {
  if(!ha(a)) {
    throw Error("Fn must not be null and must be a function");
  }
  return q.setTimeout(function() {
    a()
  }, b)
}
p.G = function(a) {
  Md.dispatchEvent(new Pd(Md, a))
};
function T(a) {
  Md.dispatchEvent(new Nd(Md, a))
}
p.Za = function() {
  return this.$a || !fc()
};
function ce() {
}
p = ce.prototype;
p.channelHandleMultipleArrays = null;
p.okToMakeRequest = ba(0);
p.channelOpened = e();
p.channelHandleArray = e();
p.channelError = e();
p.channelClosed = e();
p.getAdditionalParams = function() {
  return{}
};
p.getNetworkTestImageUri = ba(null);
p.isActive = ba(!0);
p.badMapError = e();
p.correctHostPrefix = function(a) {
  return a
};
var $, de, ee = [].slice;
de = {0:"Ok", 4:"User is logging out", 6:"Unknown session ID", 7:"Stopped by server", 8:"General network error", 2:"Request failed", 9:"Blocked by a network administrator", 5:"No data from server", 10:"Got bad data from the server", 11:"Got a bad response from the server"};
$ = function(a, b) {
  var c, d, f, g, h, m, k, t, l, r;
  t = this;
  a || (a = "channel");
  a.match(/:\/\//) && a.replace(/^ws/, "http");
  b || (b = {});
  s(b || "string" === typeof b) && (b = {});
  m = b.reconnectTime || 3E3;
  r = function(a) {
    t.readyState = t.readyState = a
  };
  r(this.CLOSED);
  l = null;
  g = b.Lc;
  c = function() {
    var a, b;
    b = arguments[0];
    a = 2 <= arguments.length ? ee.call(arguments, 1) : [];
    try {
      return"function" === typeof t[b] ? t[b].apply(t, a) : void 0
    }catch(c) {
      throw a = c, "undefined" !== typeof console && null !== console && console.error(a.stack), a;
    }
  };
  d = new ce;
  d.channelOpened = function() {
    g = l;
    r($.OPEN);
    return c("onopen")
  };
  f = null;
  d.channelError = function(a, b) {
    var d;
    d = de[b];
    f = b;
    r($.eb);
    try {
      return c("onerror", d, b)
    }catch(g) {
    }
  };
  k = null;
  d.channelClosed = function(a, d, g) {
    if(t.readyState !== $.CLOSED) {
      l = null;
      a = f ? de[f] : "Closed";
      r($.CLOSED);
      try {
        c("onclose", a, d, g)
      }catch(he) {
      }
      b.reconnect && (7 !== f && 0 !== f) && (d = 6 === f ? 0 : m, clearTimeout(k), k = setTimeout(h, d));
      return f = null
    }
  };
  d.channelHandleArray = function(a, b) {
    return c("onmessage", b)
  };
  h = function() {
    if(l) {
      throw Error("Reconnect() called from invalid state");
    }
    r($.CONNECTING);
    c("onconnecting");
    clearTimeout(k);
    l = new Jd(b.appVersion, null != g ? g.Db : void 0);
    b.crossDomainXhr && (l.$a = !0);
    l.e = d;
    f = null;
    if(b.failFast) {
      var h = l;
      h.Ka = !0;
      h.a.info("setFailFast: true");
      (h.o || h.F) && h.V > (h.Ka ? 0 : h.kb) && (h.a.info("Retry count " + h.V + " > new maxRetries " + (h.Ka ? 0 : h.kb) + ". Fail immediately!"), h.o ? (h.o.cancel(), h.ma(h.o)) : (q.clearTimeout(h.F), h.F = null, Z(h, 2)))
    }
    return l.hb("" + a + "/test", "" + a + "/bind", b.extraParams, null != g ? g.Z : void 0, null != g ? g.ya : void 0)
  };
  this.open = function() {
    if(t.readyState !== t.CLOSED) {
      throw Error("Already open");
    }
    return h()
  };
  this.close = function() {
    clearTimeout(k);
    f = 0;
    if(t.readyState !== $.CLOSED) {
      return r($.eb), l.disconnect()
    }
  };
  this.sendMap = function(a) {
    var b;
    if((b = t.readyState) === $.eb || b === $.CLOSED) {
      throw Error("Cannot send to a closed connection");
    }
    b = l;
    if(0 == b.c) {
      throw Error("Invalid operation: sending map when state is closed");
    }
    1E3 == b.s.length && b.a.I("Already have 1000 queued maps upon queueing " + Lc(a));
    b.s.push(new Ld(b.rc++, a));
    2 != b.c && 3 != b.c || Wd(b)
  };
  this.send = function(a) {
    return this.sendMap({JSON:Lc(a)})
  };
  h();
  return this
};
$.prototype.CONNECTING = $.CONNECTING = $.CONNECTING = 0;
$.prototype.OPEN = $.OPEN = $.OPEN = 1;
$.prototype.CLOSING = $.CLOSING = $.eb = 2;
$.prototype.CLOSED = $.CLOSED = $.CLOSED = 3;
("undefined" !== typeof exports && null !== exports ? exports : window).BCSocket = $;
var Image, XMLHttpRequest, fe, ge, window;
fe = require("request");
Image = function() {
  var a = this;
  this.__defineSetter__("src", function(b) {
    b = b.toString();
    b.match(/^\/\//) && (b = "http:" + b);
    return fe(b, function(b) {
      return null != b ? "function" === typeof a.onerror ? a.onerror() : void 0 : "function" === typeof a.onload ? a.onload() : void 0
    })
  });
  return this
};
XMLHttpRequest = require("../XMLHttpRequest").XMLHttpRequest;
Jd.prototype.Ia = function() {
  var a;
  a = new id;
  a.wb = function() {
    return new XMLHttpRequest
  };
  return a
};
q = window = {setTimeout:setTimeout, clearTimeout:clearTimeout, setInterval:setInterval, clearInterval:clearInterval, console:console, location:null, navigator:{userAgent:"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_7_2) AppleWebKit/535.1 (KHTML, like Gecko) Chrome/14.0.835.202 Safari/535.1"}};
ge = require("url");
exports.setDefaultLocation = function(a) {
  "string" === typeof a && (a = ge.parse(a));
  return window.location = a
};

})();
