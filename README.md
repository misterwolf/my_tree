# MyTree
**My first node project ever. Not needed to set up server, it's just for demonstration purpose.** 💪🏽

It provides the base actions for creating a Simple Tree data representation, with the calculation of the depth of each node.

## Clone this repository
git clone git@github.com:misterwolf/my_tree.git

## Install node.js (and npm)
-> https://nodesource.com/blog/installing-nodejs-tutorial-mac-os-x/

## Install Jasmine

`$ npm install jasmine-node -g`

## Run tests

in the project folder

`$ jasmine-node spec/`

## Run script

in the project folder

`$ node example.js`

you should see such log:

```
3
2
0
MyNode {
  data: undefined,
  __children: [
    MyNode {
      data: undefined,
      __children: [Array],
      __parent: [Circular]
    },
    MyNode { data: undefined, __children: [], __parent: [Circular] }
  ],
  __parent: null
}
```

