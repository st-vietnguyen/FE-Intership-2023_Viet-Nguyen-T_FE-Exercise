var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import fetchData from '../api/fetchData.js';
import Cart, { CartItem } from '../cart/cart.entity.js';
const render = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield fetchData('../data.json');
    if (data && data.length) {
        const productContainer = document.querySelector('.section-products .container');
        const newProductContainer = document.querySelector('.section-new-products .container');
        let productListHtml = `
    <ul class="product-list row">
    ${data
            .map((product) => {
            return `<li class="product-item col-3 col col-md-6">
        <a class="product-link">
          <div class="product">
            <div class="product-image-wrapper ${product.status === 0 ? 'disabled' : ''}">
              ${product.discount
                ? `<tag class="tag tag-red">-${product.discount}%</tag>`
                : ''}
              <img class="product-image" src='${product.image}'/>
              <icon class="icon icon-cart" data-index=${product.id}></icon>
            </div>
            <h4 class="product-name">${product.name}</h4>
            <div class="product-price-wrapper">
              <span class="price-offical price-sale">${product.discount
                ? (product.price -
                    (product.discount * product.price) / 100).toFixed(2)
                : product.price}</span>
              <span class="cost">${product.price}</span>
            </div>
          </div>
        </a>
      </li>`;
        })
            .join('')}
    </ul>`;
        productContainer.innerHTML = productListHtml;
        newProductContainer.innerHTML = productListHtml;
        displayQuantityOfCart();
        addEventCartClick(data);
    }
});
const addEventCartClick = (data) => {
    var _a;
    const products = (_a = JSON.parse(localStorage.getItem('cart'))) !== null && _a !== void 0 ? _a : [];
    const btnCartList = document.querySelectorAll('.product .icon-cart');
    btnCartList.forEach((btnElement) => {
        btnElement.addEventListener('click', () => {
            handleAddToCart(products, btnElement, data);
        });
    });
};
const handleAddToCart = (products, btnElement, data) => {
    const productIndex = btnElement.getAttribute('data-index');
    let product = products.find((prd) => {
        return prd.id === parseInt(productIndex);
    });
    if (!product) {
        product = JSON.parse(JSON.stringify(data[productIndex]));
        product.quantity = 1;
        products.push(product);
    }
    else {
        product.quantity += 1;
    }
    render();
    displayQuantityOfCart();
    localStorage.setItem('cart', JSON.stringify(products));
};
export const displayQuantityOfCart = () => {
    const products = JSON.parse(localStorage.getItem('cart')) || [];
    const cart = new Cart(products.map((prd) => {
        return new CartItem(prd);
    }));
    const cartQuantityElement = document.querySelector('.cart-quantity');
    let sumOfProduct = cart.calcTotalProduct();
    if (sumOfProduct !== 0) {
        cartQuantityElement.style.visibility = 'unset';
        cartQuantityElement.innerHTML = sumOfProduct.toString();
    }
    else {
        cartQuantityElement.style.visibility = 'hidden';
    }
};
export default render;
