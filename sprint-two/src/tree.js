var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me

  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
	this.children.push(Tree(value));
};

treeMethods.contains = function(target) {
	// while child exists, 
	   // if children.value = target, return true 
	// return false

	// var truth = false;

	// function findNode(node) {
	// 	if (node.value === target) {
	// 		console.log('true')
	// 		truth = true;
	// 		return;
	// 	} else if (node.children === undefined) {
	// 		truth = false;
	// 		return;
	// 	} else {
	// 		node.children.forEach(function(element, index, array) {
	// 			findNode(element);
	// 		});
	// 	}
	// }

	// findNode(this);

	// return truth;

	var truth = false;

	function findNode(node) {
		if (node) {
			if (node.value === target){
				truth = true;
			}
		}

		node.children.forEach(function(el){
			return findNode(el);
		});
	}

	findNode(this);
    return truth;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
