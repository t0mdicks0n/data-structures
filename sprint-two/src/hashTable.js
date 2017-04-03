var HashTable = function(newLimit) {
  this._limit = 8;
  if (newLimit !== undefined) {
    this._limit = newLimit
  }

  this._storage = LimitedArray(this._limit);
  this._usedStorageIdx = 0;


};


HashTable.prototype.insert = function(key, value) {
  var index = getIndexBelowMaxForKey(key, this._limit);


  if (this._storage.get(index) === undefined) {
    this._storage.set(index, []);
  }

  // insert key/value into the Hash Table and increase usedStorageIdx count
  this._storage.get(index).push([key, value]);
  this._usedStorageIdx++;

   // when usedStorageIdx hits the limit, then resize the HashTable
  if (this._usedStorageIdx >= this._limit * 0.75){
    resizeHashTable(this, 'increase');

  }
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
    this._usedStorageIdx--;
  }

  //resize 
   if (this._limit > 8 && this._usedStorageIdx <= this._limit * 0.25) {
     resizeHashTable(this, 'decrease');
   }
};


function resizeHashTable(originalHashTable, resizeDirection) {
  // create new LimitedArray with double size 
  //var newLimitedArray = LimitedArray(this._limit * 2);
  if (resizeDirection === 'increase') { 
    var newHashTable = new HashTable(originalHashTable._limit * 2);
  } else if (resizeDirection === 'decrease') {
    var newHashTable = new HashTable(originalHashTable._limit / 2);
  }
  // newHashTable._limit = originalHashTable._limit * 2;
  // newHashTable._storage = LimitedArray(this._limit * 2);
  // console.log(originalHashTable);
  //console.log(newHashTable);

  // loop through the existing Hash Table and push it into the new LimitedArray
  originalHashTable._storage.each(function(element, index, array) {
    if (element !== undefined) {
      for (var i = 0; i < element.length; i++) {
          var key = element[i][0];
          var value = element[i][1];
          
          newHashTable.insert(key, value);
      };
    }
  });

  originalHashTable._storage = newHashTable._storage;
  originalHashTable._limit = newHashTable._limit;
  originalHashTable._usedStorageIdx = newHashTable._usedStorageIdx;

}



/*
 * Complexity: What is the time complexity of the above functions?
 */

/*
 ********** NOTE: **********
 * Do not edit this code unless you see a bug!
 */


// This class represents an array with limited functionality and a maximum size.
// It will ensure that you don't accidentally try to use up too much space.

// Usage:
// //   limitedArray.set(3, 'hi');
// //   limitedArray.get(3); // returns 'hi'




var LimitedArray = function(limit) {
  var storage = [];

  var limitedArray = {};
  limitedArray.get = function(index) {
    checkLimit(index);
    return storage[index];
  };
  limitedArray.set = function(index, value) {
    checkLimit(index);
    storage[index] = value;
  };
  limitedArray.each = function(callback) {
    for (var i = 0; i < storage.length; i++) {
      callback(storage[i], i, storage);
    }
  };

  var checkLimit = function(index) {
    if (typeof index !== 'number') {
      throw new Error('setter requires a numeric index for its first argument');
    }
    if (limit <= index) {
      throw new Error('Error trying to access an over-the-limit index');
    }
  };

  return limitedArray;
};

// This is a "hashing function". You don't need to worry about it, just use it
// to turn any string into an integer that is well-distributed between the
// numbers 0 and `max`
var getIndexBelowMaxForKey = function(str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


  var hashTable = new HashTable();
  var people = [['Steven', 'Tyler'], ['George', 'Harrison'], ['Mr.', 'Doob'], ['Dr.', 'Sunshine'], ['John', 'Resig'], ['Brendan', 'Eich'], ['Alan', 'Turing']];

  people.forEach(function(person) {
  var firstName = person[0];
  var lastName = person[1];
  hashTable.insert(firstName, lastName);
  });





