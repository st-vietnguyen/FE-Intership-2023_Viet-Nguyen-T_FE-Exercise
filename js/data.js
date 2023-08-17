import Product from './product.js';

const productList = [
  {
    id: 0,
    name: 'T-shirt Summer Vibes',
    price: 199.99,
    image: '../assets/images/product-1.png',
    discount: 30,
    quantity: 14,
  },
  {
    id: 1,
    name: 'T-shirt Summer Vibes',
    price: 199.99,
    image: '../assets/images/product-2.png',
    discount: 0,
    quantity: 11,
  },
  {
    id: 2,
    name: 'T-shirt Summer Vibes',
    price: 199.99,
    image: '../assets/images/product-3.png',
    discount: 20,
    quantity: 6,
  },
  {
    id: 3,
    name: 'T-shirt Summer Vibes',
    price: 199.99,
    image: '../assets/images/product-4.png',
    discount: 10,
    quantity: 10,
  },
];

const data = productList.map(product => new Product(product));

export default data;
