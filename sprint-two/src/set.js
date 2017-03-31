var Set = function() {
  var set = Object.create(setPrototype);
  set.storage = []; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  this.storage.push(item);
};

setPrototype.contains = function(item) {
  var truth = false;
  this.storage.forEach(function(el){
  	if (el === item){
  		truth = true; 
  	}
  })
  return truth;
};

setPrototype.remove = function(item) {
  var idx;
  this.storage.forEach(function(el, index, array){
  	if (el === item){
  		idx = index 
  	}
  })
  this.storage.splice(idx, 1);
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
