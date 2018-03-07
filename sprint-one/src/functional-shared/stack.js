var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newStack = {};
  
  extend(newStack, stackMethods);

  return newStack;

};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

var stackMethods = {};

var counter = 0;

stackMethods.size = function() {
  return Object.keys(this).length - Object.keys(stackMethods).length;
};

stackMethods.pop = function() {
  var keys = Object.keys(this);
  var mostRecent = keys[keys.length - Object.keys(stackMethods).length - 1];
  var unstacking = this[mostRecent];
  delete this[mostRecent];
  return unstacking;
};

stackMethods.push = function(value) {
  this[counter] = value;
  counter++;
};