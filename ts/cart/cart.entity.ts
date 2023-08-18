import { CartItemType } from './cart.interface.js';

class CartItem implements CartItemType {
  id: number;
  name: string;
  price: number;
  image: string;
  discount: number;
  quantity: number;
  constructor(cartItem : CartItemType) {
    const { id, name, price, image, discount, quantity } = cartItem;
    this.id = id;
    this.name = name;
    this.price = price;
    this.image = image;
    this.discount = discount;
    this.quantity = quantity;
  }
}

export default CartItem;
