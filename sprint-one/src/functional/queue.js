var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  var counter = 0;
  someInstance.enqueue = function(value) {
    storage[counter] = value;
    counter++;
  };

  someInstance.dequeue = function() {
    var keys = Object.keys(storage);
    var leastRecent = keys[0];
    var dequeueing = storage[leastRecent];
    delete storage[leastRecent];
    return dequeueing;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
