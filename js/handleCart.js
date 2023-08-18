export const addEventBtnMinus = (productList) => {
  const btnMinusList = document.querySelectorAll('.btn-minus');

  btnMinusList.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      handleDecreaseProduct(productList);
    });
  });
};

export const handleDeleteProduct = (productList) => {
  const btnDeleteList = document.querySelectorAll('.btn-delete');

  btnDeleteList.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      let productIndex = Number.parseInt(e.target.dataset.index);
      let newProductList = productList.filter((prd) => prd.id !== productIndex);
      localStorage.setItem('products', JSON.stringify(newProductList));
      renderCart();
    });
  });
};

export const handleIncreaseProduct = (productList) => {
  const btnPlusList = document.querySelectorAll('.btn-plus');

  btnPlusList.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      let productIndex = Number.parseInt(e.target.dataset.index);
      let product = productList.find((prd) => prd.id === productIndex);

      product.quantity += 1;
      localStorage.setItem('products', JSON.stringify(productList));
      renderCart();
    });
  });
};

export const caculateTotalCart = (productList) => {
  let total = productList.reduce(
    (acc, cur) => acc + cur.price * cur.quantity,
    0
  );
  return total;
};

export const handleDecreaseProduct = (productList) => {
  let productIndex = Number.parseInt(e.target.dataset.index);
  let product = productList.find((prd) => prd.id === productIndex);

  product.quantity -= 1;
  if (product.quantity < 1) {
    let newProductList = productList.filter((prd) => prd.id !== productIndex);
    localStorage.setItem('products', JSON.stringify(newProductList));
  } else {
    localStorage.setItem('products', JSON.stringify(productList));
  }
  renderCart();
};
