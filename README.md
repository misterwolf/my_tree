# my_tree
My first node project ever. Not needed to set up server: it's just for
demonstration purpose.

## clone this repository
git clone git@github.com:misterwolf/my_tree.git

## install node.js (and npm)
-> https://nodesource.com/blog/installing-nodejs-tutorial-mac-os-x/

## install Jasmine

`$ npm install jasmine-node -g`

## run tests

in the project folder

`$ jasmine-node spec/`

## run script

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

