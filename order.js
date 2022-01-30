const Menu = require('./menu');
const menu = new Menu;

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

  getTotal() {
    let total = 0;
    for(let i = 0; i < this.basket.length; i++){
      total += (this.basket[i]['amount'] * menu.dish[this.basket[i]['item']]);
    
    };
      return total.toFixed(2);
    
  }

  showSummary() {
    console.log('Total: £' + this.getTotal());
  }
}

module.exports = Order;
