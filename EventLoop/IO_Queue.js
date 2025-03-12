const fs = require("fs");

// Experiment 6

// fs.readFile(__filename, () => {
//   console.log("File 1");
// });

// process.nextTick(() => {
//   console.log("Next tick");
// });

// Promise.resolve().then(() => {
//   console.log("Promise");
// });

// Experiment 7

// setTimeout(() => {
//   console.log("Timeout 1");
// }, 0);

// fs.readFile(__filename, () => {
//   console.log("File 1");
// });

// Experiment 8

setTimeout(() => {
  console.log("Timeout 1");
}, 50);

fs.readFile(__filename, () => {
  console.log("File 1");
});

process.nextTick(() => {
  console.log("Next tick");
});

Promise.resolve().then(() => {
  console.log("Promise");
});
