// 4. What's the output of the code below when running in Node.js? If for the same code running in browser, what's the output? Why is the output different?

var message = 'Hello World';
function logMessage() {
  console.log(this.message);
}
logMessage();
// Answer: The output of the code in Node.js is 'undefined', and the output in the browser is 'Hello World'.
// In Node.js, the value of this inside a function refers to the global object. Since message is not defined on the global object, this.message is undefined.
// In the browser, the value of this inside a function refers to the window object. Since message is defined on the window object, this.message is 'Hello World'.