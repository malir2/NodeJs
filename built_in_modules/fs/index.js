const fs = require("node:fs");

const readFile = fs.readFileSync("./text.txt", "utf-8");

console.log(readFile);

const readFileAgain = fs.readFile("./text.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});

console.log(readFileAgain);

fs.writeFileSync("./text.txt", "Hello World");

fs.writeFile("./text.txt", ". I write this content", { flag: "a" }, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("File updated");
  }
});
