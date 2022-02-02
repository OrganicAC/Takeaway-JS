const Menu = require('./menu');
const Text = require('./SMS');
require('dotenv').config()
const menu = new Menu;

class Order {
  constructor(text = null) {
    this.basket = []; 
    this.text = text
  }

  addItem(item, amount) {
    let dishObject = {item, amount}
    this.basket.push(dishObject);
  }

  getBasket() {
    return this.basket
  }

  getTotal() {
    let total = 0;
    for(let i = 0; i < this.basket.length; i++){
      total += (this.basket[i]['amount'] * menu.dish[this.basket[i]['item']]);
    
    };
      return total.toFixed(2);
  }

  showSummary() {
    console.log('Basket: ', this.basket)
    console.log('Total: £' + this.getTotal());
  }

  sendText() {
    if (this.text != null){
      this.text.sendSMS()
    } else {
      return "Enjoy your meal."
    };
  }
}

module.exports = Order;