import { CartItemType } from './cart.interface.js';

export class CartItem implements CartItemType {
  id: number;
  name: string;
  price: number;
  image: string;
  discount: number;
  quantity: number;

  constructor(cartItem: CartItemType) {
    const { id, name, price, image, discount, quantity } = cartItem;
    this.id = id;
    this.name = name;
    this.price = price;
    this.image = image;
    this.discount = discount || 0;
    this.quantity = quantity;
  }

  calcDiscountPrice = (): number => {
    return this.discount
      ? this.price - (this.price * this.discount) / 100
      : this.price;
  };
}

class Cart {
  listProduct: CartItem[];

  constructor(listProduct: CartItem[]) {
    this.listProduct = listProduct;
  }

  calcTotalProduct = (): number => {
    let total = this.listProduct.reduce((acc: number, cur: CartItemType) => {
      return acc + cur.quantity;
    }, 0);
    return total;
  };
  calcTotalPrice = () => {
    let total: number = this.listProduct.reduce(
      (acc: number, cur: CartItemType) =>
        acc + new CartItem(cur).calcDiscountPrice() * cur.quantity,
      0
    );
    return total;
  };
}

export default Cart;
