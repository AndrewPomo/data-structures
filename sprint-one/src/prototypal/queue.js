var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = Object.create(queueMethods);
  newQueue.storage = {};
  newQueue.high = 0;
  newQueue.low = 0;

  return newQueue;
};

var queueMethods = {};

queueMethods.size = function() {
  if (this.high <= this.low) {
    return 0;
  }
  return this.high - this.low;
};

queueMethods.enqueue = function(value) {
  this.high++;
  this.storage[this.high] = value;
};

queueMethods.dequeue = function() {
  this.low++;
  var unqueueing = this.storage[this.low];
  delete unqueueing;
  return unqueueing;
};