describe('binarySearchTree', function() {
  var binarySearchTree;

  beforeEach(function() {
    binarySearchTree = new BinarySearchTree(5);
  });

  it('should have methods named "insert", "contains", and "depthFirstLog', function() {
    expect(binarySearchTree.insert).to.be.a('function');
    expect(binarySearchTree.contains).to.be.a('function');
    expect(binarySearchTree.depthFirstLog).to.be.a('function');
  });

  it('should insert values at the correct location in the tree', function() {
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    binarySearchTree.insert(6);
    expect(binarySearchTree.left.right.value).to.equal(3);
    expect(binarySearchTree.right.left.value).to.equal(6);
  });

  it('should have a working "contains" method', function() {
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    expect(binarySearchTree.contains(7)).to.equal(true);
    expect(binarySearchTree.contains(8)).to.equal(false);
  });

  it('should execute a callback on every value in a tree using "depthFirstLog"', function() {
    var array = [];
    var func = function(value) { array.push(value); };
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.depthFirstLog(func);
    expect(array).to.eql([5, 2, 3]);
  });

  it('should have a method named "depth" that returns an object with min and max depth', function() {
    binarySearchTree = new BinarySearchTree(8);
    var array = [1, 10, 2, 3, 4];
    array.forEach(function(element, index, array) {
      binarySearchTree.insert(element);
    });
    var maxD = binarySearchTree.depth().max;
    var minD = binarySearchTree.depth().min;
    expect(maxD).to.eql(2);
    expect(minD).to.eql(2);

  });

  it('should rebalance as soon as the max depth is more than twice the minimum depth', function() {
    binarySearchTree = new BinarySearchTree(8);
    var array = [1, 10, 2, 3, 4];
    array.forEach(function(element, index, array) {
      binarySearchTree.insert(element);
    });
    var maxD2 = binarySearchTree.depth().max;
    var minD2 = binarySearchTree.depth().min;
    expect(maxD2).to.eql(2);
    expect(minD2).to.eql(2);
  });

});
