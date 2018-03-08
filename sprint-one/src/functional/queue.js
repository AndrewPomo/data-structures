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
    delete storage[low];
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

// high is 0, 
// { 
//   3: val,   //high is 4, add, low is 3
//   4: val   //high is 4, add, low is 3
// }