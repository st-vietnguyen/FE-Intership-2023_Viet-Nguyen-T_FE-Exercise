const handleDeleteProduct = (productList) => {
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

export const handleDecreaseProduct = (productList) => {
  const btnMinusList = document.querySelectorAll('.btn-minus');

  btnMinusList.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      let productIndex = Number.parseInt(e.target.dataset.index);
      let product = productList.find((prd) => prd.id === productIndex);

      product.quantity -= 1;
      if (product.quantity < 1) {
        let newProductList = productList.filter(
          (prd) => prd.id !== productIndex
        );
        localStorage.setItem('products', JSON.stringify(newProductList));
      } else {
        localStorage.setItem('products', JSON.stringify(productList));
      }
      renderCart();
    });
  });
};
const handleIncreaseProduct = (productList) => {
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
const renderCart = () => {
  const productList = JSON.parse(localStorage.getItem('products')) || [];
  const tbody = document.getElementsByClassName('tbody')[0];

  tbody.innerHTML = `${productList
    .map((product) => {
      return `
        <tr class="product-item">
          <td>${product.id}</td>
          <td>${product.name}</td>
          <td>
            <img class="product-image" src="${product.image}" alt="" />
          </td>
          <td>
            <div class="wrapper">
              <button class="btn-minus" data-index=${product.id}>-</button>
              <span class="product-quantity">${product.quantity}</span>
              <button class="btn-plus" 
              data-index=${product.id}>+</button>
            </div>
          </td>
          <td class="product-total">$${(
            product.price * product.quantity
          ).toFixed(2)}</td>
          <td><button class="btn-delete" data-index=${
            product.id
          }">Xóa</button></td>
        </tr>`;
    })
    .join('')}
    <span class="cart-total-price">TOTAL: $${caculateTotalCart()}</span>`;
  handleDecreaseProduct(productList);
  handleIncreaseProduct(productList);
  handleDeleteProduct(productList);
};

const caculateTotalCart = () => {
  let productList = JSON.parse(localStorage.getItem('products')) || [];
  let total = productList.reduce(
    (acc, cur) => acc + cur.price * cur.quantity,
    0
  );
  return total;
};
renderCart();
