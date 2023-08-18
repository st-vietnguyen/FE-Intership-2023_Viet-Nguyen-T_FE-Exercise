import { ProductProps } from './product.interface.js';

class Product implements ProductProps {
  id: number;
  name: string;
  price: number;
  image: string;
  discount: number;
  quantity: number;
  status: 0 | 1;
  constructor(product: ProductProps) {
    const { id, name, price, image, discount , status } = product;
    this.id = id;
    this.name = name;
    this.price = price;
    this.image = image;
    this.discount = discount;
    this.status = status;
  }
}

export default Product;
