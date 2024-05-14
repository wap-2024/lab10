// 1. How many callbacks queues in Node.js and what are they? Give examples to explain how different callbacks are enqueued in different queues.

// Answer: There are 6 types of callbacks queues in Node.js:
// 1. Timer Queue: setTimeout and setInterval
// 2. I/O Callback Queue: I/O operations
// 3. Immediate Queue: setImmediate
// 4. Close Callback Queue: close event callbacks
// 5. Check Queue: setImmediate
// 6. Microtask Queue: process.nextTick, Promises
