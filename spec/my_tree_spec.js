#!javascript
// spec/my_tree_spec.js

/*jshint esversion: 6 */

const MyTree = require('../lib/my_tree');
const MyNode = require('../lib/my_node');

describe('MyTree', function () {
  it('expect to have a node in the root', function () {
    var mytree = new MyTree();
    expect(mytree.root instanceof MyNode).toBeTruthy();
  });
});
