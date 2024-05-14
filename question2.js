console.log('start');

setTimeout(() => console.log('timeout 1'), 0);

setTimeout(() => {

    console.log('timeout 2')

    process.nextTick(() => console.log('nextTick 3'));

}, 0);

setTimeout(() => console.log('timeout 3'), 0);

new Promise((resolve, reject) => resolve('Hello')).then(() => console.log('Promise...1'));

new Promise((resolve, reject) => resolve('Hello')).then(() => console.log('Promise...2'));

process.nextTick(() =>  console.log('nextTick 1'));

process.nextTick(() =>  console.log('nextTick 2'));

console.log('end');

/*
OUTPUT:
start
end
nextTick 1
nextTick 2
Promise...1
Promise...2
timeout 1
timeout 2
nextTick 3
*/
// Explanation:
// The order of execution is as follows:
// 1. The script starts executing and logs 'start', 'end'.
// 2. setTimeout is called with a delay of 0 ms. This enqueues the callback in the Timer Queue.
// 3. setTimeout is called with a delay of 0 ms. This enqueues the callback in the Timer Queue.
// 4. setTimeout is called with a delay of 0 ms. This enqueues the callback in the Timer Queue.
// 5. Two Promises are created and resolved immediately. The callbacks are enqueued in the Microtask Queue.
// 6. Two process.nextTick callbacks are enqueued in the Microtask Queue.
// 7. The Microtask Queue is executed before the Timer Queue. The order of execution is as follows:
//    - nextTick 1
//    - nextTick 2
//    - Promise...1
//    - Promise...2
// 8. The Timer Queue is executed next. The order of execution is as follows:
//    - timeout 2
//    - nextTick 3
// 9. The output is 'start', 'end', 'nextTick 1', 'nextTick 2', 'Promise...1', 'Promise...2', 'timeout 1', 'timeout 2', 'nextTick 3'.
