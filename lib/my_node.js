/*jslint node: true */
/*jshint esversion: 6 */

"use strict";

class MyNode {
  constructor(opts) {
    opts = opts || {};

    this.data = opts.data;
    this.__children = [];
    this.__parent = null;
  }

  parent() {
    return this.__parent;
  }

  addNode(data) {
    var newNode = new MyNode(data);

    newNode.__parent = this;
    this.__children.push(newNode);

    return newNode;
  }

  getNodeAt(index) {
    if (!Number.isInteger(index)) {
      return null;
    }

    return this.__children[index];
  }

  maxDepth() {
    // recurseDepth function make our job easier it's easier because we can
    // define a set of depth as starting point.
    return recurseDepth(this, 0);
  }
}

function recurseDepth(node, depth){
  var values = [];
  var childrenLength = node.__children.length;

  // 1. if children list is empty, return depth because there's nothing down here
  if ( childrenLength === 0 ){
    return depth;
  }

  // 2. otherwise, if children exist, let's iterate them all and for each of them
  // pass the current depth + 1, because we are going down.
  // Note: because children may have different depth....
  for (var i = 0; i < childrenLength; i++) {
    values.push(recurseDepth(node.__children[i], depth + 1));
  }

  // ... choose the max of them
  return Math.max.apply(null, values);
}

module.exports = MyNode;
