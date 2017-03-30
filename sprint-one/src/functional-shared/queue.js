var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var queueObj = {};
  queueObj.count = 0;
  queueObj.storage = {};

  _.extend(queueObj, queueMethods);

  return queueObj;
};

var queueMethods = {};

// push
queueMethods.enqueue = function(value) {
  this.storage[value] = value;
  this.count++;
};

// pop
queueMethods.dequeue = function() {
  var first = [];
  if (this.count > 0) {
    this.count--;
  } 
  for (var values in this.storage) {
    if (first.length === 0) {
      first.push(this.storage[values]); // first = [a]
      delete this.storage[values];   // storage = {1: b}
    }
    // if first.length === 0
      // push the value to first
      // delete the value
  }
  return first[0];
};

// size
queueMethods.size = function() {
  return this.count;
};