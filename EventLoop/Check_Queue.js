const fs = require("fs");

// Experiment 10

// setTimeout(() => {
//   console.log("Timeout 1");
// }, 0);

// fs.readFile(__filename, () => {
//   console.log("File 1");

//   setImmediate(() => {
//     console.log("Immediate");
//   });
// });

// process.nextTick(() => {
//   console.log("Next tick");
// });

// Promise.resolve().then(() => {
//   console.log("Promise");
// });

// for (let index = 0; index < 10000000; index++) {}

// Experiment 11

// setTimeout(() => {
//   console.log("Timeout 1");
// }, 0);

// fs.readFile(__filename, () => {
//   console.log("File 1");

//   setImmediate(() => {
//     console.log("Immediate");
//   });

//   process.nextTick(() => {
//     console.log("Inner Next tick");
//   });

//   Promise.resolve().then(() => {
//     console.log("Inner Promise");
//   });
// });

// process.nextTick(() => {
//   console.log("Next tick");
// });

// Promise.resolve().then(() => {
//   console.log("Promise");
// });

// for (let index = 0; index < 10000000; index++) {}

// Experiment 12

// setImmediate(() => {
//   console.log("Immediate 1");
// });

// setImmediate(() => {
//   console.log("Immediate 2");
//   process.nextTick(() => {
//     console.log("Inner Next tick");
//   });

//   Promise.resolve().then(() => {
//     console.log("Inner Promise");
//   });
// });

// setImmediate(() => {
//   console.log("Immediate 3");
// });

// Experiment 13

setImmediate(() => {
  console.log("Immediate");
});

setTimeout(() => {
  console.log("Set Timeout");
}, 0);
