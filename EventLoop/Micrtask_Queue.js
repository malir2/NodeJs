// Experiment 1

console.log("Experiment 1");

// console.log("console 1");
// process.nextTick(() => {
//   console.log("Next tick queue console 2");
// });
// console.log("console 3");

// First execute all sync code and then move to nextTick queue and execute the nextTick call back

console.log("-------------------------------------------------");

// Experiment 2

console.log("Experiment 2");

// Promise.resolve().then(() => {
//   console.log("Promise 1");
// });

// process.nextTick(() => {
//   console.log("Next tick 2");
// });

// First execute nextTick queue and then execute the promise queue

console.log("-------------------------------------------------");

// Experiment 2.1

console.log("Expreriment 2.1");

process.nextTick(() => {
  console.log("Next tick 1");
});
process.nextTick(() => {
  console.log("Next tick 2");
  process.nextTick(() => {
    console.log("Next tick callback inside next tick 2");
  });
});
process.nextTick(() => {
  console.log("Next tick 3");
});

Promise.resolve().then(() => {
  console.log("Promise 1");
});
Promise.resolve().then(() => {
  console.log("Promise 2");
  process.nextTick(() => {
    console.log("Next tick callback inside promise 2");
  });
});
Promise.resolve().then(() => {
  console.log("Promise 3");
});
