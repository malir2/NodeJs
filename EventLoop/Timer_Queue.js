// // Experiment 3: Timer Queue

// console.log("Expreriment 3");

// process.nextTick(() => {
//   console.log("Next tick 1");
// });
// process.nextTick(() => {
//   console.log("Next tick 2");
//   process.nextTick(() => {
//     console.log("Next tick callback inside next tick 2");
//   });
// });
// process.nextTick(() => {
//   console.log("Next tick 3");
// });

// Promise.resolve().then(() => {
//   console.log("Promise 1");
// });
// Promise.resolve().then(() => {
//   console.log("Promise 2");
//   process.nextTick(() => {
//     console.log("Next tick callback inside promise 2");
//   });
// });
// Promise.resolve().then(() => {
//   console.log("Promise 3");
// });

// setTimeout(() => {
//   console.log("Timeout 1");
// }, 0);
// setTimeout(() => {
//   console.log("Timeout 2");
// }, 0);
// setTimeout(() => {
//   console.log("Timeout 3");
// }, 0);

// Experiment 4

// console.log("Expreriment 4");

// process.nextTick(() => {
//   console.log("Next tick 1");
// });
// process.nextTick(() => {
//   console.log("Next tick 2");
//   process.nextTick(() => {
//     console.log("Next tick callback inside next tick 2");
//   });
// });
// process.nextTick(() => {
//   console.log("Next tick 3");
// });

// Promise.resolve().then(() => {
//   console.log("Promise 1");
// });
// Promise.resolve().then(() => {
//   console.log("Promise 2");
//   process.nextTick(() => {
//     console.log("Next tick callback inside promise 2");
//   });
// });
// Promise.resolve().then(() => {
//   console.log("Promise 3");
// });

// setTimeout(() => {
//   console.log("Timeout 1");
// }, 0);
// setTimeout(() => {
//   console.log("Timeout 2");
//   process.nextTick(() => {
//     console.log("Next tick callback inside timeout 2");
//   });
// }, 0);
// setTimeout(() => {
//   console.log("Timeout 3");
// }, 0);

// Experiment 5

console.log("Expreriment 5");

setTimeout(() => {
  console.log("Timeout 1");
}, 100);
setTimeout(() => {
  console.log("Timeout 2");
}, 50);
setTimeout(() => {
  console.log("Timeout 3");
}, 0);
