const fs = require("fs");

const readStream = fs.createReadStream(__filename);

readStream.close();

readStream.on("close", () => {
  console.log("Close Function");
});

setImmediate(() => {
  console.log("Set Immediate");
});

setTimeout(() => {
  console.log("Set timeout");
}, 0);

process.nextTick(() => {
  console.log("Next Tick");
});

Promise.resolve().then(() => {
  console.log("Promise");
});
