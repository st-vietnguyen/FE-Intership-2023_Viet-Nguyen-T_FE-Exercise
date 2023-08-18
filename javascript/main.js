import render from './product/product.js';
import fetchData from './product/fetchData.js';
fetchData('../data.json', (data) => {
    render(data);
});
