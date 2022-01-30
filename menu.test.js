const Menu = require('./menu');

describe('menu function', () => {
  it('returns a dish and price', () => {
    const menu = new Menu;
    expect(menu.getDish()[0]).toEqual({"item": "Nigiri", "price": 2.99})
  });

  it('returns list of dishes and prices', () => {
    const menu = new Menu;
    expect(menu.getDish()).toEqual([{"item": "Nigiri", "price": 2.99}, {"item": "Sashimi", "price": 4.99}, {"item": "Hosomaki", "price": 1.99}])
  });
})
