const fs = require("fs");

// Experiment 9

setTimeout(() => {
  console.log("Timeout 1");
}, 0);

fs.readFile(__filename, () => {
  console.log("File 1");
});

process.nextTick(() => {
  console.log("Next tick");
});

Promise.resolve().then(() => {
  console.log("Promise");
});

setImmediate(() => {
  console.log("Immediate");
});

for (let index = 0; index < 10000000; index++) {}
