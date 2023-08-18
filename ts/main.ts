import render from './product/product.js';
import fetchData from './product/fetchData.js';
import { ProductProps } from './product/product.interface.js';

fetchData('../data.json', (data: ProductProps[]) => {
  render(data);
});
