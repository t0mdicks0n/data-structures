var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(key, value) {
  var index = getIndexBelowMaxForKey(key, this._limit);

  if (this._storage.get(index) === undefined) {
  	this._storage.set(index, []);
  }

  this._storage.get(index).push([key, value]);
};

HashTable.prototype.retrieve = function(key) {
  var index = getIndexBelowMaxForKey(key, this._limit);
 
  var value;
  if (this._storage.get(index) !== undefined) {
	  this._storage.get(index).forEach(function(element, index, array) {
	  	if (element[0] === key) {
	  		value = element[1];
	  	}
	  });
  }
  return value;
};

HashTable.prototype.remove = function(key) {
  var index = getIndexBelowMaxForKey(key, this._limit);

  var idx;
  if (this._storage.get(index) !== undefined) {
  	this._storage.get(index).forEach(function(element, index, array) {
  		if (element[0] === key) {
  			idx = index;
  		}
  	});
  	this._storage.get(index).splice(idx, 1);
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


