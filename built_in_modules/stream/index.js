const fs = require("node:fs");

const readData = fs.createReadStream("./text.txt", {
  encoding: "utf-8",
  highWaterMark: 2,
});

const writeData = fs.createWriteStream("./text2.txt");

readData.on("data", (chunk) => {
  console.log(chunk);
  writeData.write(chunk);
});
