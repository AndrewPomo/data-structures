var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var high = 0;
  var low = 0;
  // Implement the methods below
  
  someInstance.enqueue = function(value) {
    high++;
    storage[high] = value;
  };

  someInstance.dequeue = function() {
    low++;
    var dequeueing = storage[low];
    delete dequeueing;
    return dequeueing;
  };

  someInstance.size = function() {
    if (high <= low) {
      return 0;
    }
    return high - low;
  };

  return someInstance;
};