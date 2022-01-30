const Order = require('./order');

let order 

beforeEach(() => {
  order = new Order;
});

describe('order function', () => {
  it('shows empty basket', () => {
    expect(order.getBasket()).toStrictEqual([])
  });

  it('shows an item in basket', () => {
    order.addItem('Nigiri', 1);
    expect(order.getBasket()).toEqual([{ "amount": 1, "item": "Nigiri" }])
  });

  it('adds multiple of an item', () => {
    order.addItem('Nigiri', 2);
    expect(order.getBasket()).toEqual([{ "amount": 2, "item": "Nigiri" }])
  });

  it('shows the price of the items ordered', () => {
    order.addItem('Nigiri', 2);
    expect(order.getTotal()).toBe("5.98")
  });

  it('shows the price if you order several different dishes', () => {
    order.addItem('Nigiri', 2)
    order.addItem('Sashimi', 3)
    expect(order.getTotal()).toBe("20.95")
  });
})
