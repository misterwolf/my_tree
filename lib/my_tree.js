/*jslint node: true */
/*jshint esversion: 6 */

/* global console */

"use strict";

const MyNode = require('./my_node');

class MyTree {
  constructor() {
    this.root = new MyNode();
  }
}

module.exports = MyTree;
