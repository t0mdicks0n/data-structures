var BinarySearchTree = function(value) {
		this.value = value; 
		this.left = null;
		this.right = null;
};

BinarySearchTree.prototype.insert = function(value) {
	// recursion
	var searchTree = function(node) {
    // inserting
    if (node.value < value){
    	if (node.right === null){
    		node.right = makeNode(value);
    	} else {
    		searchTree(node.right);
    	}
    } else if (node.value > value){
    	if (node.left === null){
    		node.left = makeNode(value);
    	} else {
    		searchTree(node.left);
    	}
    }
  }
  searchTree(this);
}

BinarySearchTree.prototype.contains = function(value) {
  // if value = node.value, then return true 
  // else check if value > node.value
   // if y, then check if node.right is null
     // if y, then return false 
     // if n, then recurse on the right
   //  
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
	} 

	searchTree(this);
	return truth;
}

BinarySearchTree.prototype.depthFirstLog = function(callback) {
	// do the thing with the callback(node.value)
	// if left exists 
		// recurse on left
	// if right exists
		// recurse on right

	function searchTree(node) {
    callback(node.value);

    if (node.left !== null) {
    	searchTree(node.left);
    } else if (node.right !== null) {
    	searchTree(node.right);
    }
	}

	searchTree(this);
}

var makeNode = function(value) {
  var node = {};

  node.value = value;
  node.left = null;
  node.right = null;

  return node;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */

//  var binarySearchTree = new BinarySearchTree(5);
//  binarySearchTree.insert(2);
// binarySearchTree.insert(3);
// binarySearchTree.insert(7);
// binarySearchTree.insert(6);
