var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.high = 0;
  this.low = 0;
};

Queue.prototype.size = function() {
  if (this.high <= this.low) {
    return 0;
  }
  return this.high - this.low;
};

Queue.prototype.enqueue = function(value) {
  this.high++;
  this.storage[this.high] = value;
};

Queue.prototype.dequeue = function() {
  this.low++;
  var dequeueing = this.storage[this.low];
  delete dequeueing;
  return dequeueing;
};