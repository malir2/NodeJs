const PizzaShop = require("./pizzaShop");

const pizzaShop = new PizzaShop();

pizzaShop.on("order", (size, flavour) => {
  console.log(`One ${size} ${flavour} falvour pizza is ready`);
});

pizzaShop.order("large", "tikka");

pizzaShop.displayOrder();
