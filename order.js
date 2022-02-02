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

const sms = new Text('AC3e60dbff97d7debb6e1c51bd227aa9bd', 'ab870d2bd806f9028882ed6d119c1879', '+18106418782', '+447779426575')
const x = new Order(text = sms);
x.sendText()


//add 30 minutes to date
// var minutesToAdd=60;
// var currentDate = new Date();
// var futureDate = new Date(currentDate.getTime() + minutesToAdd*60000);
// console.log(String(futureDate).slice(16, 21))