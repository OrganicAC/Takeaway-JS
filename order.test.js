const Order = require('./order');

describe('order function', () => {
  it('shows empty basket', () => {
    const order = new Order;
    expect(order.getBasket()).toStrictEqual([])
  });
})
