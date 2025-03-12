// const name = require("./Class");

// console.log(name.getName());

// name.setName("Ali");

// console.log(name.getName());

// const name2 = require("./Class");

// console.log(name2.getName());

// It prints the name Ali due to module caching. In node.js module caching is important concept that effects how modules are loaded and reused when a module is required. Node.js caches the module based on it resolved filename. This means that reloading it, which improves perfomance.

// Question is how to prevent this behaviour we will export the class itself

const name = require("./Class");

const myName = new name("Ali");

console.log(myName.getName());

const myName2 = new name("Umer");

console.log(myName2.getName());
