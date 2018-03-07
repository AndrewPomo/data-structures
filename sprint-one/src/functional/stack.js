var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  var counter = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    storage[counter] = value;
    counter++;
  };

  someInstance.pop = function() {
    var keys = Object.keys(storage);
    var mostRecent = keys[keys.length - 1];
    var unstacking = storage[mostRecent];
    delete storage[mostRecent];
    return unstacking;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
