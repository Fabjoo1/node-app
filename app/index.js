const sum = require('./sum')
const concat = require('./concat')
const SortedArray = require('sorted-array-async');

const inst = new SortedArray(concat)
let sortedArray;

inst.getArray().then(array => {
    sortedArray = array
    console.log(` sorted is: ${sortedArray.toString()}`)
})

console.log(` Sum is : ${sum} `);
console.log(` Concated array is : ${concat} `);