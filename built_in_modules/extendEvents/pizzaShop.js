const EventEmitter = require("node:events");

class PizzaShop extends EventEmitter {
  constructor() {
    super();
    this.orderNumber = 0;
  }

  order(size, flavour) {
    this.orderNumber++;
    this.emit("order", size, flavour);
  }

  displayOrder() {
    console.log(`Current order is ${this.orderNumber}`);
  }
}

module.exports = PizzaShop;
