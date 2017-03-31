var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;


  list.addToTail = function(value) {
    // if there is no head, then the value is both head and tail 
    if (list.head === null){
      list.head = Node(value);
      list.tail = list.head;
    } else {

    // if list is not empty,  
      list.tail.next = Node(value); // then set the new tail to the value 
      list.tail = list.tail.next; // link the old to the new tail  
    };

    // always assign the new tail's value. 
    list.tail.value = value;
  };
  

  list.removeHead = function() {
    var currentHead = list.head.value;
    list.head = list.head.next;
    return currentHead;
  }; 

  list.contains = function(target) {
    var node = list.head;
    while (node) {
      if (node.value === target) {
        return true;
      }
      node = node.next;
    }
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

// var linkedList = LinkedList();
// linkedList.addToTail(4);
// linkedList.addToTail(5);
// linkedList.head.value
// linkedList.removeHead();

//Failed Add code
// var add = Node(value);
//     var prevTail = list.tail;

//     // if head and tail is null, then "value" = head and tail
//     if (list.head === null && list.tail === null){
//       list.head = add;
//       list.tail = add; 
//     } else {
//     // else "value" = tail and prevTail.next = value 
//       list.tail = add;
//       prevTail.next = add.value
//       //list.tail.next = add;
//       //list.tail = list.tail.next;
//     }
//     //list.tail.value = value;
//   };
