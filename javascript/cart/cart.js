import { displayQuantityOfCart } from '../product/product.js';
const addEventDeleteProduct = (productList) => {
    const btnDeleteList = document.querySelectorAll('.btn-delete');
    btnDeleteList.forEach((btn) => {
        btn.addEventListener('click', (element) => {
            handleDeleteProduct(productList, element);
        });
    });
};
const handleDeleteProduct = (productList, element) => {
    let productIndex = Number.parseInt(element.target.dataset.index);
    let newProductList = productList.filter((prd) => prd.id !== productIndex);
    localStorage.setItem('cart', JSON.stringify(newProductList));
    renderCart();
};
export const addEventDecreaseProduct = (productList) => {
    const btnMinusList = document.querySelectorAll('.btn-minus');
    btnMinusList.forEach((btn) => {
        btn.addEventListener('click', (element) => {
            handleDecreaseProduct(productList, element);
        });
    });
};
const handleDecreaseProduct = (productList, element) => {
    let productIndex = Number.parseInt(element.target.dataset.index);
    let product = productList.find((prd) => prd.id === productIndex);
    product.quantity -= 1;
    if (product.quantity < 1) {
        let newProductList = productList.filter((prd) => prd.id !== productIndex);
        localStorage.setItem('cart', JSON.stringify(newProductList));
    }
    else {
        localStorage.setItem('cart', JSON.stringify(productList));
    }
    renderCart();
};
const addEventIncreaseProduct = (productList) => {
    const btnPlusList = document.querySelectorAll('.btn-plus');
    btnPlusList.forEach((btn) => {
        btn.addEventListener('click', (element) => {
            handleIncreaseProduct(productList, element);
        });
    });
};
const handleIncreaseProduct = (productList, element) => {
    let productIndex = Number.parseInt(element.target.dataset.index);
    let product = productList.find((prd) => prd.id === productIndex);
    product.quantity += 1;
    localStorage.setItem('cart', JSON.stringify(productList));
    renderCart();
};
const renderCart = () => {
    const productList = JSON.parse(localStorage.getItem('cart')) || [];
    const cartContainer = document.querySelector('.cart-page .container');
    cartContainer.innerHTML = `
    <table class="table">
          <thead class="thead">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Image</th>
              <th>Quantity</th>
              <th>Total</th>
              <th></th>
            </tr>
          </thead>
          <tbody class="tbody">
            ${productList
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
                    <td class="product-total">$${(product.price * product.quantity).toFixed(2)}</td>
                    <td><button class="btn-delete" data-index=${product.id}">Xóa</button></td>
                  </tr>
              
                  `;
    })
        .join('')}
          </tbody> 
    </table>
      <span class="cart-total-price">TOTAL: $${caculateTotalCart(productList).toFixed(2)}</span>
  `;
    addEventDecreaseProduct(productList);
    addEventIncreaseProduct(productList);
    addEventDeleteProduct(productList);
    displayQuantityOfCart();
};
const caculateTotalCart = (productList) => {
    let total = productList.reduce((acc, cur) => acc + (cur.price - (cur.price * cur.discount) / 100) * cur.quantity, 0);
    return total;
};
renderCart();
