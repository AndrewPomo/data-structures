var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = Object.create(queueMethods);
  newQueue.storage = {};
  newQueue.counter = 0;

  return newQueue;
};

var queueMethods = {};

queueMethods.size = function() {
  return Object.keys(this.storage).length;
};

queueMethods.enqueue = function(value) {
  this.storage[this.counter] = value;
  this.counter++;
};

queueMethods.dequeue = function() {
  var keys = Object.keys(this.storage);
  var unqueueing = this.storage[keys[0]];
  delete this.storage[keys[0]];
  return unqueueing;
};