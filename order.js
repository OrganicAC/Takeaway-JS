// As a customer
// So that I can order the meal I want
// I would like to be able to select some number of several available dishes

const Menu = require('./menu');

class Order {
  constructor() {
    this.basket = []; 
  }

  addItem(item, amount) {
    let dishObject = {item, amount}
    this.basket.push(dishObject);
  }

  getBasket() {
    return this.basket
  }
}

module.exports = Order;
