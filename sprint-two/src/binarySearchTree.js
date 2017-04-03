var BinarySearchTree = function(value) {
		this.value = value; 
		this.left = null;
		this.right = null;
};

BinarySearchTree.prototype.insert = function(value) {

	var searchTree = function(node) {
    if (node.value < value){
    	if (node.right === null) {
        node.right = new BinarySearchTree(value);
    	} else {
    		searchTree(node.right);
    	}
    } else if (node.value > value) {
    	if (node.left === null) {
        node.left = new BinarySearchTree(value);
    	} else {
    		searchTree(node.left);
    	}
    }
  };

  searchTree(this);

  if ((this.left !== null && this.right !== null) && (this.depth().max / this.depth().min > 2)) {
    this.resize();
  }
};

BinarySearchTree.prototype.contains = function(value) {
	var truth = false;

	var searchTree = function(node){
    if (value === node.value) {
      truth = true;
    } 

    if (value > node.value) {
    	if (node.right !== null) {
    		searchTree(node.right);
    	}
    } else if (value < node.value) {
    	if (node.left !== null) {
    		searchTree(node.left);
    	}
    }
	};

	searchTree(this);
	return truth;
};

BinarySearchTree.prototype.depthFirstLog = function(callback) {

	function searchTree(node) {
    callback(node.value);

    if (node.left !== null) {
    	searchTree(node.left);
    } else if (node.right !== null) {
    	searchTree(node.right);
    }
	}

	searchTree(this);
};

BinarySearchTree.prototype.forEachNode = function(callback) {

  function searchTree(node) {
    callback(node.value);

    if (node.left !== null) {
      searchTree(node);
    } else if (node.right !== null) {
      searchTree(node);
    }
  }

  searchTree(this);
};

BinarySearchTree.prototype.depth = function(bTree) {
  var depth = {max: 1, min: undefined};

  function checkDepth(node, counter) {
    if (counter === undefined) {
      counter = 1;
    }

    if (node.left === null && node.right === null) {
      if (depth.max < counter) {
        depth.max = counter;
        return;
      } else if (depth.min === undefined) {
        depth.min = counter;
      } else if (depth.min > counter) {
        depth.min = counter;
        return;
      }
    } else {
      counter ++;
      if (node.left === null) {
        checkDepth(node.right, counter);
      } else {
        checkDepth(node.left, counter);
      }
    }
  }

  checkDepth(this.left);
  checkDepth(this.right);

  return depth;
};

BinarySearchTree.prototype.resize = function() {

  // Sorting the array to binary sorting
  var valuesAscending = [];
  this.depthFirstLog(function(nodeValue) {
    valuesAscending.push(nodeValue);
  });
  var valuesBinarySorted = bSortAscArray(valuesAscending);

  // Creating a temporary search tree and re-setting the original tree's nodes
  var tempBinarySearchTree = new BinarySearchTree(valuesBinarySorted.shift());
  this.value = tempBinarySearchTree.value;
  this.right = null;
  this.left = null;

  // Re-inputing the values into the original search tree
  for (var i = 0; i < valuesBinarySorted.length; i++) {
    this.insert(valuesBinarySorted[i]);
  }

  // Functions
  function bSortAscArray(array) {
    var sortedArr = [];
    ascArr = array.sort(function(a, b) {return a - b; });

    function binarySortAscArray(arr) {
      if (arr.length === 0) {
        return;
      } else {
        var middleIndex = 0 + (arr.length - 0) / 2;

        if (arr.length === 1) {
          sortedArr.push(arr.shift());
        } else {
          var left = arr.splice(0, middleIndex);
          var right = arr.slice(1);
          
          sortedArr.push(arr.shift());

          binarySortAscArray(left);
          binarySortAscArray(right);
        }
      }
    }
    binarySortAscArray(ascArr);
    return sortedArr;
  }
};