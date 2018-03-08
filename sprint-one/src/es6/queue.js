class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.counter = 0;
    this.storage = {};
  }

  size() {
    return Object.keys(this.storage).length;
  }

  enqueue(value) {
    this.counter++;
    this.storage[this.counter] = value;
  }

  dequeue() {
    var keys = Object.keys(this.storage);
    var dequeueing = this.storage[keys[0]];
    delete this.storage[keys[0]];
    return dequeueing;
  }
}
