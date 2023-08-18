import { CartItemType } from '../cart/cart.interface.js';
import { ProductProps } from './product.interface.js';
import fetchData from '../api/fetchData.js';
import Cart, { CartItem } from '../cart/cart.entity.js';

const render = async () => {
  const data = await fetchData('../data.json');
  if (data && data.length) {
    const productContainer: HTMLElement = document.querySelector(
      '.section-products .container'
    );
    const newProductContainer: HTMLElement = document.querySelector(
      '.section-new-products .container'
    );

    let productListHtml = `
    <ul class="product-list row">
    ${data
      .map((product: ProductProps) => {
        return `<li class="product-item col-3 col col-md-6">
        <a class="product-link">
          <div class="product">
            <div class="product-image-wrapper ${
              product.status === 0 ? 'disabled' : ''
            }">
              ${
                product.discount
                  ? `<tag class="tag tag-red">-${product.discount}%</tag>`
                  : ''
              }
              <img class="product-image" src='${product.image}'/>
              <icon class="icon icon-cart" data-index=${product.id}></icon>
            </div>
            <h4 class="product-name">${product.name}</h4>
            <div class="product-price-wrapper">
              <span class="price-offical price-sale">${
                product.discount
                  ? (
                      product.price -
                      (product.discount * product.price) / 100
                    ).toFixed(2)
                  : product.price
              }</span>
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
};

const addEventCartClick = (data: Array<ProductProps>) => {
  const products = JSON.parse(localStorage.getItem('cart')) ?? [];

  const btnCartList = document.querySelectorAll('.product .icon-cart');

  btnCartList.forEach((btnElement: HTMLElement) => {
    btnElement.addEventListener('click', () => {
      handleAddToCart(products, btnElement, data);
    });
  });
};

const handleAddToCart = (
  products: CartItemType[],
  btnElement: HTMLElement,
  data: Array<ProductProps>
) => {
  const productIndex = btnElement.getAttribute('data-index');
  let product = products.find((prd: CartItemType) => {
    return prd.id === parseInt(productIndex);
  });
  if (!product) {
    product = JSON.parse(JSON.stringify(data[productIndex]));
    product.quantity = 1;
    products.push(product);
  } else {
    product.quantity += 1;
  }
  render();
  displayQuantityOfCart();
  localStorage.setItem('cart', JSON.stringify(products));
};

export const displayQuantityOfCart = () => {
  const products: CartItemType[] =
    JSON.parse(localStorage.getItem('cart')) || [];
  const cart = new Cart(
    products.map((prd) => {
      return new CartItem(prd);
    })
  );
  const cartQuantityElement: HTMLElement =
    document.querySelector('.cart-quantity');
  let sumOfProduct = cart.calcTotalProduct();

  if (sumOfProduct !== 0) {
    cartQuantityElement.style.visibility = 'unset';
    cartQuantityElement.innerHTML = sumOfProduct.toString();
  } else {
    cartQuantityElement.style.visibility = 'hidden';
  }
};

export default render;
