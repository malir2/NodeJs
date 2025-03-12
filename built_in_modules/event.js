const EventEmitter = require("node:events");

const event = new EventEmitter();

event.on("on-reach", (name) => {
  console.log(`${name} is here`);
});

event.on("on-reach", () => {
  console.log("I am here");
});

event.emit("on-reach", "Ali");

console.log("Hello World");
