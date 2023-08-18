import Product from './product/product.entity.js';
import { ProductProps } from './product/product.interface.js';

const productList: ProductProps[] = [
  {
    id: 0,
    name: 'T-shirt Summer Vibes',
    price: 199.99,
    image: '../assets/images/product-1.png',
    discount: 30,
    status: 1,
  },
  {
    id: 1,
    name: 'T-shirt Summer Vibes',
    price: 199.99,
    image: '../assets/images/product-2.png',
    discount: 0,
    status: 1,
  },
  {
    id: 2,
    name: 'T-shirt Summer Vibes',
    price: 199.99,
    image: '../assets/images/product-3.png',
    discount: 20,
    status: 0,
  },
  {
    id: 3,
    name: 'T-shirt Summer Vibes',
    price: 199.99,
    image: '../assets/images/product-4.png',
    discount: 10,
    status: 1,
  },
];

const data = productList.map((product) => new Product(product));

export default data;
