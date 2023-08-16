import sumProductOfCart from './sumProductOfCart.js';
import data from './data.js';

const addToCart = () => {
  const products = JSON.parse(localStorage.getItem('products')) ?? [];
  const btnAddToCartList = document.querySelectorAll('.product .icon-cart');

  btnAddToCartList.forEach((btnElement) => {
    btnElement.addEventListener('click', () => {
      const productIndex = btnElement.getAttribute('data-index');
      let product = products.find((prd) => {
        return prd.id === Number.parseInt(productIndex);
      });
      if (!product) {
        product = JSON.parse(JSON.stringify(data[productIndex]));
        product.quantity = 1;
        products.push(product);
      } else {
        product.quantity += 1;
      }
      localStorage.setItem('products', JSON.stringify(products));
      sumProductOfCart();
    });
  });
};

export default addToCart;
