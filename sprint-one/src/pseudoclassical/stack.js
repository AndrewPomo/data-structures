var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.counter = 0;
  this.storage = {};
};

Stack.prototype.size = function() {
  return this.counter;
};

Stack.prototype.push = function(value) {
  this.counter++;
  this.storage[this.counter] = value;
};

Stack.prototype.pop = function() {
  var unstacking = this.storage[this.counter];
  delete this.storage[this.counter];
  if (this.counter > 0) {
    this.counter--;
  }
  return unstacking;
};
