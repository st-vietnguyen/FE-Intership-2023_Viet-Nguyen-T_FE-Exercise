import { displayQuantityOfCart } from '../product/product.js';
import Cart, { CartItem } from './cart.entity.js';
const addEventDeleteProduct = (productList) => {
    const btnDeleteList = document.querySelectorAll('.btn-delete');
    btnDeleteList.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            let productIndex = Number.parseInt(e.target.dataset.index);
            let product = productList.find((prd) => prd.id === productIndex);
            let newQuantity = 0;
            handleChangeQuantity(productList, product, newQuantity);
        });
    });
};
export const addEventDecreaseProduct = (productList) => {
    const btnMinusList = document.querySelectorAll('.btn-minus');
    btnMinusList.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            let productIndex = Number.parseInt(e.target.dataset.index);
            let product = productList.find((prd) => prd.id === productIndex);
            let newQuantity = product.quantity - 1;
            handleChangeQuantity(productList, product, newQuantity);
        });
    });
};
const addEventIncreaseProduct = (productList) => {
    const btnPlusList = document.querySelectorAll('.btn-plus');
    btnPlusList.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            let productIndex = Number.parseInt(e.target.dataset.index);
            let product = productList.find((prd) => prd.id === productIndex);
            let newQuantity = product.quantity + 1;
            handleChangeQuantity(productList, product, newQuantity);
        });
    });
};
const renderCart = () => {
    const productList = JSON.parse(localStorage.getItem('cart')) || [];
    const productData = new Cart(productList.map((prd) => {
        return new CartItem(prd);
    }));
    const cartContainer = document.querySelector('.cart-page .container');
    if (!productData.listProduct.length) {
        cartContainer.innerHTML = `
    <a class="btn back-link" href="/">Back Home</a>
    <div class="sold-out-wrapper">
      <img class="sold-out-image" src="../assets/images/sold-out.png" />
    <div/>`;
    }
    else {
        cartContainer.innerHTML = `
    <a class="back-link" href="/">Back Home</a>
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
            ${productData.listProduct
            .map((product) => {
            return `
                  <tr class="product-item">
                    <td>${product.id}</td>
                    <td>${product.name}</td>
                    <td>
                      <img class="product-image" src="${product.image}" alt="" />
                    </td>
                    <td>
                      <div class="actions">
                        <button class="btn-minus" data-index=${product.id}>-</button>
                        <span class="product-quantity">${product.quantity}</span>
                        <button class="btn-plus" 
                        data-index=${product.id}>+</button>
                      </div>
                    </td>
                    <td class="product-total">$${product
                .calcDiscountPrice()
                .toFixed(2)}</td>
                    <td><button class="btn-delete" data-index=${product.id}">Xóa</button></td>
                  </tr>
              
                  `;
        })
            .join('')}
          </tbody> 
    </table>
      <span class="cart-total-price btn btn-primary">TOTAL: $${productData.calcTotalPrice().toFixed(2)}</span>
  `;
    }
    addEventDecreaseProduct(productData.listProduct);
    addEventIncreaseProduct(productData.listProduct);
    addEventDeleteProduct(productData.listProduct);
    displayQuantityOfCart();
};
const handleChangeQuantity = (productList, product, newQuantity) => {
    if (newQuantity < 1) {
        let newProductList = productList.filter((prd) => prd.id !== product.id);
        localStorage.setItem('cart', JSON.stringify(newProductList));
    }
    else {
        product.quantity = newQuantity;
        localStorage.setItem('cart', JSON.stringify(productList));
    }
    renderCart();
};
renderCart();
