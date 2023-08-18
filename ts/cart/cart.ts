import { CartItemType } from './cart.interface';
import { displayQuantityOfCart } from '../product/product.js';
import fetchData from '../product/fetchData.js';

fetchData();
const addEventDeleteProduct = (productList: CartItemType[]) => {
  const btnDeleteList = document.querySelectorAll('.btn-delete');

  btnDeleteList.forEach((btn : HTMLButtonElement) => {
    btn.addEventListener('click', (e: Event) => {
      handleDeleteProduct(productList, e);
    });
  });
};

const handleDeleteProduct = (productList: CartItemType[], e: Event) => {
  let productIndex = Number.parseInt(
    (e.target as HTMLButtonElement).dataset.index
  );
  let newProductList: CartItemType[] = productList.filter(
    (prd) => prd.id !== productIndex
  );
  localStorage.setItem('cart', JSON.stringify(newProductList));
  renderCart();
};

export const addEventDecreaseProduct = (productList: CartItemType[]) => {
  const btnMinusList = document.querySelectorAll('.btn-minus');

  btnMinusList.forEach((btn: HTMLButtonElement) => {
    btn.addEventListener('click', (e: Event) => {
      handleDecreaseProduct(productList, e);
    });
  });
};

const handleDecreaseProduct = (productList: CartItemType[], e: Event) => {
  let productIndex = Number.parseInt(
    (e.target as HTMLButtonElement).dataset.index
  );
  let product: CartItemType = productList.find(
    (prd) => prd.id === productIndex
  );

  product.quantity -= 1;
  if (product.quantity < 1) {
    let newProductList = productList.filter((prd) => prd.id !== productIndex);
    localStorage.setItem('cart', JSON.stringify(newProductList));
  } else {
    localStorage.setItem('cart', JSON.stringify(productList));
  }
  renderCart();
};

const addEventIncreaseProduct = (productList: CartItemType[]) => {
  const btnPlusList = document.querySelectorAll('.btn-plus');

  btnPlusList.forEach((btn: HTMLButtonElement) => {
    btn.addEventListener('click', (e: Event) => {
      handleIncreaseProduct(productList, e);
    });
  });
};

const handleIncreaseProduct = (productList: CartItemType[], e: Event) => {
  let productIndex = Number.parseInt(
    (e.target as HTMLButtonElement).dataset.index
  );
  let product: CartItemType = productList.find(
    (prd) => prd.id === productIndex
  );

  product.quantity += 1;
  localStorage.setItem('cart', JSON.stringify(productList));
  renderCart();
};
const renderCart = () => {
  const productList: CartItemType[] =
    JSON.parse(localStorage.getItem('cart')) || [];
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
              .map((product: CartItemType) => {
                return `
                  <tr class="product-item">
                    <td>${product.id}</td>
                    <td>${product.name}</td>
                    <td>
                      <img class="product-image" src="${
                        product.image
                      }" alt="" />
                    </td>
                    <td>
                      <div class="wrapper">
                        <button class="btn-minus" data-index=${
                          product.id
                        }>-</button>
                        <span class="product-quantity">${
                          product.quantity
                        }</span>
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
                  </tr>
              
                  `;
              })
              .join('')}
          </tbody> 
    </table>
      <span class="cart-total-price">TOTAL: $${caculateTotalCart(
        productList
      ).toFixed(2)}</span>
  `;
  addEventDecreaseProduct(productList);
  addEventIncreaseProduct(productList);
  addEventDeleteProduct(productList);
  displayQuantityOfCart();
};

const caculateTotalCart = (productList: CartItemType[]) => {
  let total: number = productList.reduce(
    (acc: number, cur: CartItemType) =>
      acc + ( cur.discount ? cur.price - (cur.price * cur.discount) / 100 : 0) * cur.quantity,
    0
  );
  return total;
};
renderCart();
