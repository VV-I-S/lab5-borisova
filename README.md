# lab5-borisova
Package for calculating the roots of a quadratic equation

## Install

Install with [npm](https://www.npmjs.com/):

```sh
$ npm install lab5-borisova
```

## Usage

```js
var {quadratic, quadraticWithDiscriminant} = require('lab5-borisova')

console.log(quadratic(1,4,3)) // [ -1, -3 ]
console.log(quadraticWithDiscriminant(1,4,3)) // { discriminant: 4, roots: [ -1, -3 ] }
```
