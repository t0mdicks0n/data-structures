// Instantiate a new graph
var Graph = function() {
  this.nodes = [];
  this.edges = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodes.push(node);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  var truth = false;
  this.nodes.forEach(function(el){
    if (el === node){
      truth = true;
    } 
  })
  return truth;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  // remove the node
  var idx, edgeidx; 
  this.nodes.forEach(function(el, index){
    if (el === node){
          idx = index;
    }
  });
  this.nodes.splice(idx, 1);

  // remove the edges
  this.edges.forEach(function(element, index, array){
    if (element[0] === node || element[1] === node){
           edgeidx = index;
    }
  })
  this.edges.splice(edgeidx, 1);
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  var truth = false;
  var targetTuple = [fromNode, toNode];
  // iterate over the edges array
  this.edges.forEach(function(element, index, array) {
    if (targetTuple.join() === element.join() || targetTuple.join() === element.reverse().join()) {
      truth = true;
    }
  })
    // if edges array containes the tuple return true
  return truth;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  var tuple = [fromNode, toNode];
  this.edges.push(tuple);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var idx;
  var targetTuple = [fromNode, toNode];
  this.edges.forEach(function(el, index){
    if (targetTuple.join() === el.join() || targetTuple.join() === el.reverse().join()){
          idx = index;
    }
  });
  this.edges.splice(idx, 1);
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  this.nodes.forEach(cb);
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



