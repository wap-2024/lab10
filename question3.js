// 3. What's the output of the code below? Try to understand how it works as we explained in the class.

const fs = require('fs');
fs.readFile('hello.txt', () => {
  console.log('readFile....');
});
setTimeout(() => console.log('timeout'), 0);
setImmediate(() => console.log('Immediate'));

