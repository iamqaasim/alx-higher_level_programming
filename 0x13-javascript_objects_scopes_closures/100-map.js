#!/usr/bin/node
const list = require('./100-data.js').list;

var newlist = list.map(function(val, index){
            return {key:index, value:val*index};
        })

console.log(newArr)
