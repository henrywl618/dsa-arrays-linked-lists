/** Node: node for a singly linked list. */

class Node {
    constructor(val, next=null, previous=null) {
      this.val = val;
      this.next = next;
      this.previous = previous;
    }
  }
  
  /** LinkedList: chained together nodes. */
  
  class LinkedList {
    constructor(vals = []) {
      this.head = null;
      this.tail = null;
      this.length = 0;
  
      for (let val of vals) this.push(val);
    }
  
    /** push(val): add new value to end of list. */
  
    push(val) {
      const newNode = new Node(val);
  
      if(!this.head){
        this.head = newNode;
        this.tail = newNode;
        this.length = 1;
      } else {
        newNode.previous = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
        this.length = this.length + 1;
      }
  
    }
  
    /** unshift(val): add new value to start of list. */
  
    unshift(val) {
      const newNode = new Node(val);
  
      if(!this.head){
        this.head = newNode;
        this.tail = newNode;
        this.length = 1;
      } else if(this.length === 1){
        newNode.next = this.head;
        this.tail = this.head;
        this.head = newNode;
        this.length = this.length + 1;
      } else {
        newNode.next = this.head;
        this.head = newNode;
        this.length = this.length + 1;
      }
    }
  
    /** pop(): return & remove last item. */
  
    pop() {
      const removedNode = this.tail;
  
      if(this.length === 0){
        throw "This is an empty list!"
      } else if(this.length === 1){
        this.head = null;
        this.tail = null;
        removedNode.next = null;
        removedNode.previous = null;
        this.length = 0;
        return removedNode.val
      }
      
      this.tail.previous.next = null;
      this.tail = this.tail.preivious;
      removedNode.previous = null
      this.length = this.length - 1;
  
      return removedNode.val
    }
  
    /** shift(): return & remove first item. */
  
    shift() {
      let currentNode = this.head;
      const removedNode = this.head;
  
      if(this.length === 0){
        throw "This is an empty list!"
      } else if(this.length === 1){
        this.head = null;
        this.tail = null;
        removedNode.next = null
        this.length = 0;
  
        return removedNode.val
      }
  
      this.head = removedNode.next;
      removedNode.next = null;
      this.length = this.length - 1;
  
      return removedNode.val
    }
  
    /** getAt(idx): get val at idx. */
  
    getAt(idx) {
      if (idx < 0 || idx > this.length - 1){
        throw "Invalid index!"
      }
  
      let currentNode = this.head;
      let currentIndex = 0;
      while (currentIndex != idx){
        currentNode = currentNode.next;
        currentIndex++;
      }
  
      return currentNode.val;
    }
  
    /** setAt(idx, val): set val at idx to val */
  
    setAt(idx, val) {
      if (idx < 0 || idx > this.length - 1){
        throw "Invalid index!"
      }
  
      let currentNode = this.head;
      let currentIndex = 0;
      while (currentIndex != idx){
        currentNode = currentNode.next;
        currentIndex++;
      }
  
      currentNode.val = val;
    }
  
    /** insertAt(idx, val): add node w/val before idx. */
  
    insertAt(idx, val) {
      console.log(idx)
      if(idx === 0){
        return this.unshift(val);
      } else if(idx === this.length){
        return this.push(val);
      } else if (idx < 0 || idx > this.length - 1){
        throw "Invalid index!"
      }
  
      const newNode = new Node(val);
      let previousNode = this.head;
      let currentIndex = 0;
  
      while (currentIndex != idx - 1){
        previousNode = previousNode.next;
        currentIndex++;
      }
  
      const nextNode = previousNode.next;
      previousNode.next = newNode;
      newNode.next = nextNode;
      this.length++;
    }
  
    /** removeAt(idx): return & remove item at idx, */
  
    removeAt(idx) {
      if(idx === 0){
        return this.shift();
      } else if(idx === this.length - 1){
        return this.pop();
      } else if (idx < 0 || idx > this.length - 1){
        throw "Invalid index!"
      }
  
      let previousNode = this.head;
      let currentIndex = 0;
  
      while (currentIndex != idx - 1){
        previousNode = previousNode.next;
        currentIndex++;
      }
  
      const removedNode = previousNode.next;
      const nextNode = removedNode.next;
      previousNode.next = nextNode;
      removedNode.next = null;
      this.length--;
  
      return removedNode.val;
    }
  
    /** average(): return an average of all values in the list */
  
    average() {
      if(this.length === 0) return 0;
      let currentNode = this.head;
      let sum = currentNode.val;
  
      while(currentNode.next){
        currentNode = currentNode.next;
        sum = sum + currentNode.val;
      }
  
      return sum/this.length;
    }
  }
  
  module.exports = LinkedList;
  