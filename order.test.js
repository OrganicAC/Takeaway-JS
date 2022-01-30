const Order = require('./order');

describe('order function', () => {
  it('shows empty basket', () => {
    const order = new Order;
    expect(order.getBasket()).toStrictEqual([])
  });

  it('shows an item in basket', () => {
    const order = new Order;
    order.addItem('Nigiri')
    expect(order.getBasket()).toEqual(['Nigiri'])
  });

})
