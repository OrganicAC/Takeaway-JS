class Menu {
  constructor(dish) {
    this.dish = { 'Nigiri': 2.99, 'Sashimi': 4.99, 'Hosomaki': 1.99 };
  }
  
  getDish() {
    return this.dish;
  }
}

module.exports = Menu;


