var a = 1;
var b = "two";
var d = 'Durian';







// Module Pattern
// special.js
(function () {
  var d = 99;

  function private() {

  }

  function public() {

  }

  var module = {};

  module.public = public;
  // ... does something special

  window.myModule = module

  return module
}())








// important.js
(function (module) {

  var d = 88;
  // ... all the code that does something important

  return module
}())
