


(function($) {
 $.cookieJar = function(name, options) {
 if (!$.parseJSON) return false; if (!$.toJSON) return false; if (!$.cookie) return false; return new function() {
 
 function log(s) {
 if (typeof console != 'undefined' && typeof console.log != 'undefined') {
 console.log('cookiejar:' + self.cookieName + ' ' + s); } else {
 alert(s); }
 };  function save() {
 
  if($.toJSON(self.cookieObject).length >4000) { return false; }
 if (self.options.debug) log('save ' + $.toJSON(self.cookieObject)); $.cookie(self.cookieName, $.toJSON(self.cookieObject), self.options.cookie); return true;  };  function load() {
 var cookieJSON = $.cookie(self.cookieName); if (typeof cookieJSON == 'string') {
 if (self.options.debug) log('load ' + cookieJSON); self.cookieObject = $.parseJSON(cookieJSON, true); } else {
 if (self.options.debug) log('load new'); self.cookieObject = {}; save(); }
 }

 
 this.set = function(name, value) {
 if (self.options.debug) log('set ' + name + ' = ' + value); self.cookieObject[name] = value; return save(); };  this.get = function(name) {
 if (!self.options.cacheCookie) {
 load(); }
 if (self.options.debug) log('get ' + name + ' = ' + self.cookieObject[name]); return self.cookieObject[name]; };  this.remove = function(name) {
 if (self.options.debug) log('remove ' + name); if (typeof name != 'undefined') {
 delete(self.cookieObject[name]); } else {
 self.setFromObject({}); }
 return save(); };  this.setFromObject = function(object) {
 if (typeof object == 'object') {
 if (self.options.debug) log('setFromObject'); self.cookieObject = object; return save(); }
 };  this.toObject = function() {
 if (self.options.debug) log('toObject'); return self.cookieObject; };  this.toString = function() {
 if (self.options.debug) log('toString = ' + $.toJSON(self.cookieObject)); return $.toJSON(self.cookieObject); };  this.destroy = function() {
 if (self.options.debug) log('destroy'); self.cookieObject = {}; return $.cookie(self.cookieName, null, self.options.cookie); };  this.construct = function(name, options) {
 self.options = $.extend({
 cookie: {
 expires: 365,
 path: '/',
 domain: options.domain 
 },
 cacheCookie: true,
 cookiePrefix: 'jqCookieJar_',
 debug: false
 }, options); self.cookieName = self.options.cookiePrefix + name; load(); return self; }; var self = this; self.construct(name, options); }; };})(jQuery);