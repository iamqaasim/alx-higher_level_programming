#!/usr/bin/node
if (typeof parseint(process.argv[2]) === 'string' || process.argv[2] === undefined) {
  console.log('Not a number');
} else {
  console.log('My number:', parseInt(process.argv[2]));
}
