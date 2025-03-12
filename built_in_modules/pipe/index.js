const fs = require("node:fs");
const zlib = require("node:zlib");

const gZip = zlib.createGzip();

const readData = fs.createReadStream("./text.txt", {
  encoding: "utf-8",
  highWaterMark: 2,
});

readData.pipe(gZip).pipe(fs.WriteStream("./text-2.txt.gzip"));

const writeData = fs.createWriteStream("./text2.txt");

readData.pipe(writeData);
