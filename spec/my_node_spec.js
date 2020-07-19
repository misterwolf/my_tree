#!javascript
// spec/my_tree_spec.js

/*jshint esversion: 6 */

const MyNode = require('../lib/my_node');

describe('MyNode', function () {
  let initialState;

  beforeEach(function(){
    myNode = new MyNode();
  });

  describe('#inizialize', function () { // like a ruby context
    it('expects to have array children', function () {
      expect(myNode.__children).toBeDefined();
      expect(myNode.__children instanceof Array).toBeTruthy();
    });

    it('expects to have a node in the root', function () {
      expect(myNode.__parent).toBeDefined();
    });

    it('expects to have data set', function () {
      var testData = 'test-leaf';
      myNode = new MyNode({ data: testData });

      expect(myNode.data).toBe(testData);
    });
  });

  describe('#parent', function () {
    let parent;

    it('returns null if node is orphan', function () {
      parent = myNode.parent();

      expect(parent).toBe(null);
    });

    describe('node is added to current node', function () { // like a ruby context
      it('returns the current node', function () {
        child = myNode.addNode();

        expect(child.parent()).toBe(myNode);
      });
    });
  });

  describe('#addNode', function () {
    let createdNode;

    beforeEach(function(){
      createdNode = myNode.addNode();
    });

    it('adds a node in the children array', function () {
      expect(myNode.__children.length).toBe(1);
      expect(myNode.__children instanceof Array).toBeTruthy();
    });

    it('returns the node just created', function () {
      expect(myNode.__children[0]).toBe(createdNode);
    });

    describe('data is passed node is added', function () {
      it('returns the parent node', function () {
        createdNode = myNode.addNode();
        parent = createdNode.parent();

        expect(parent).toBe(myNode);
      });
    });
  });

  describe('#getNodeAt', function () {
    let createdNode1;
    let createdNode2;
    let createdNode3;

    beforeEach(function(){
      createdNode1 = myNode.addNode();
      createdNode2 = myNode.addNode();
      createdNode3 = myNode.addNode();
    });

    it('returns the node at specified position', function () {
      expect(myNode.getNodeAt(1)).toBe(createdNode2);
    });

    describe('param is not integer', function () {
      it('returns null', function () {
        expect(myNode.getNodeAt('text')).toBe(null);
        expect(myNode.getNodeAt(null)).toBe(null);
        expect(myNode.getNodeAt(1.2)).toBe(null);
      });
    });
  });

  describe('#maxDepth', function () {
    let createdNode1;
    let createdNode1_1;
    let createdNode1_2;
    let createdNode1_1_1;
    let createdNode1_1_1_1;
    let createdNode1_1_1_1_1;

    beforeEach(function(){
      createdNode1 = myNode.addNode();
      createdNode1_1 = createdNode1.addNode();
      createdNode1_2 = createdNode1.addNode();
      createdNode1_1_1 = createdNode1_1.addNode();
      createdNode1_1_1_1 = createdNode1_1_1.addNode();
      createdNode1_1_1_1_1 = createdNode1_1_1_1.addNode();
    });

    it('returns correct depth', function () {
      expect(myNode.maxDepth()).toBe(5);
    });

    describe('first depth of children', function () {
      it('returns correct depth for 1st child node', function () {
        expect(createdNode1.maxDepth()).toBe(4);
      });

      it('returns correct depth for 2st child node', function () {
        expect(createdNode1_1.maxDepth()).toBe(3);
      });

      describe('depth of 2st node', function () {
        it('returns correct depth for 1st child node', function () {
          expect(createdNode1_2.maxDepth()).toBe(0);
        });

        describe('4rd depth of children', function(){
          it('returns correct depth for 3st child node', function () {
            expect(createdNode1_1_1.maxDepth()).toBe(2);
          });

          describe('4rd depth of children', function(){
            it('returns correct depth for 3st child node', function () {
              expect(createdNode1_1_1_1.maxDepth()).toBe(1);
            });

            describe('5th depth of children', function(){
              it('returns correct depth for 3st child node', function () {
                expect(createdNode1_1_1_1_1.maxDepth()).toBe(0);
              });
            });
          });
        });
      });
    });
  });
});
