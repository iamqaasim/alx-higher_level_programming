#!/usr/bin/node
const list = require('./100-data.js').list;
console.log(list);
let list2 = list.map((item, index) => item * index);
console.log(list2);
