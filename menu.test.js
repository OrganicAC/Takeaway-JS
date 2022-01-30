const Menu = require('./menu');

describe('menu function', () => {
  it('returns list of dishes and prices', () => {
    const menu = new Menu;
    expect(menu.getDish()).toEqual({"Hosomaki": 1.99, "Nigiri": 2.99, "Sashimi": 4.99})
  });
})
