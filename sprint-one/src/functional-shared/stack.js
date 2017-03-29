var Stack = function() {
  var stackObj = {};
  stackObj.storage = {};
  stackObj.count = 0;

  stackObj.size = stackMethods.size;
  stackObj.push = stackMethods.push;
  stackObj.pop = stackMethods.pop;

  return stackObj;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this.count++;
  this.storage[this.count] = value;
};

stackMethods.pop = function() {
  var pop = this.storage[this.count];
  delete this.storage[this.count];

  if (this.count > 0) {
    this.count--;
  }
  return pop; 
};

stackMethods.size = function() {
  return this.count;
};