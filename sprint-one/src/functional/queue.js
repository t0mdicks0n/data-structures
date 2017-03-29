var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;
  var index = 0;
  var first;
  var ticketcounter = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[index] = value;
    count++;
    index++;
  };

  someInstance.dequeue = function() {
    first = storage[ticketcounter];
    delete storage[ticketcounter];
    ticketcounter++;
    if (count > 0){
      count--;
    } 
    return first;
    
  };

  someInstance.size = function() {
    return count;
  };

  return someInstance;
};


//storage = {1: a}
// first = a
// storage = {}
// ticketcounter = 1
// a
