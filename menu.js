class Menu {
  constructor(dish) {
    this.dish = [
      { item: 'Nigiri', price: 2.99 },
      { item: 'Sashimi', price: 4.99 },
      { item: 'Hosomaki', price: 1.99 }
    ];
  }
  
  getDish() {
    return this.dish;
  }
}

module.exports = Menu;


