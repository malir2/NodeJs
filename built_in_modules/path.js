const path = require("path");

// Return the last portion of the path
console.log(path.basename(__dirname));
console.log(path.basename(__filename));

// Return the extension of the file
console.log(path.extname(__filename));

// Return an object of properties about file or folder
console.log(path.parse(__filename));
console.log(path.parse(__dirname));

// Return string from an object
console.log(path.format(path.parse(__filename)));

// Return is path is absolute or not
console.log(path.isAbsolute("./path.js"));

// Return the join path
console.log(path.join("folder1", "folder2", "index.js"));

// Return the absolute path
console.log(path.resolve("folder1", "folder2", "index.js"));
