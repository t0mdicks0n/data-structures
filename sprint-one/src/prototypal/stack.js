var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var stackObj = Object.create(stackMethods);

  // stackObj.prototype = Object.create( Stack.prototype );


  stackObj.storage = {};
  stackObj.count = 0;

  return stackObj;

};

var stackMethods = {};

stackMethods.push = function(value) {
  this.count++;
  this.storage[this.count] = value;
};

stackMethods.pop = function() {
  var popped = this.storage[this.count];
  delete this.storage[this.count]; 
  if (this.count > 0) {
  	this.count--;
  }	
  return popped; 
};

stackMethods.size = function() {
	return this.count;
};



// Stack.prototype.push = function(value) {
//   this.count++;
//   this.storage[this.count] = value;
// };

// Stack.prototype.pop = function() {
//   var popped = this.storage[this.count];
//   delete this.storage[this.count]; 
//   if (this.count > 0) {
//   	this.count--;
//   }	
//   return popped; 
// };

// Stack.prototype.size = function() {
// 	return this.count;
// };

// var test = Stack();
// // console.log(Stack.prototype.constructor);
// // console.log(test.constructor);
// // console.log(test instanceof Stack);
// test.isPrototypeOf(Stack); //false ;