class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.high = 0;
    this.low = 0;
    this.storage = {};
  }

  size() {
    if (this.high <= this.low) {
      return 0;
    }
    return this.high - this.low;
  }

  enqueue(value) {
    this.high++;
    this.storage[this.high] = value;
  }

  dequeue() {
    this.low++;
    var dequeueing = this.storage[this.low];
    delete this.storage[this.low];
    return dequeueing;
  }
}
