
function sumProductOfCart() {
  const cartQuantityElement = document.querySelector('.cart-quantity');
  const products = JSON.parse(localStorage.getItem('products')) ?? [];

  let sumOfProduct = products.reduce((acc, cur) => {
    return acc + cur.quantity;
  }, 0);
  if (sumOfProduct !== 0) {
    cartQuantityElement.innerHTML = sumOfProduct;
  } else {
    cartQuantityElement.style.display = 'none';
  }
}

export default sumProductOfCart;
