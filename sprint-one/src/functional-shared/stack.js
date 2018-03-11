var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newStack = {};
  newStack.storage = {};
  
  _.extend(newStack, stackMethods);

  return newStack;

};

var stackMethods = {};

var counter = 0;

stackMethods.size = function() {
  return Object.keys(this.storage).length;
};

stackMethods.pop = function() {
  var keys = Object.keys(this.storage);
  var mostRecent = keys[keys.length - 1];
  var unstacking = this.storage[mostRecent];
  delete this.storage[mostRecent];
  return unstacking;
};

stackMethods.push = function(value) {
  this.storage[counter] = value;
  counter++;
};