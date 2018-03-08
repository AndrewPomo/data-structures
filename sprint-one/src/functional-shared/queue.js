var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var newQueue = {};
  newQueue.storage = {};

  _.extend(newQueue, queueMethods);

  return newQueue;
};

var queueMethods = {};

var counter = 0;

queueMethods.size = function() {
  return Object.keys(this.storage).length;
};

queueMethods.enqueue = function(value) {
  this.storage[counter] = value;
  counter++; 
};

queueMethods.dequeue = function() {
  var keys = Object.keys(this.storage);
  var leastRecent = keys[0];
  var dequeueing = this.storage[leastRecent];
  delete this.storage[leastRecent];
  return dequeueing;
};