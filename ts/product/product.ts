import { CartItemType } from '../cart/cart.interface';
import { ProductProps } from './product.interface';
import fetchData from '../product/fetchData.js';

const render = async () => {
  const data = await fetchData('../data.json')
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
              product.status === 'Out of stock' ? 'disabled' : ''
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
  updateQuantityOfCart(products);
  localStorage.setItem('cart', JSON.stringify(products));
};

const updateQuantityOfCart = (products: CartItemType[]) => {
  console.log(products);
  
  const cartQuantityElement: HTMLElement =
    document.querySelector('.cart-quantity');
  let sumOfProduct = sumProductOfCart(products);
  cartQuantityElement.style.visibility = 'unset';
  cartQuantityElement.innerHTML = sumOfProduct.toString();
};

export const displayQuantityOfCart = () => {
  const products: CartItemType[] =
    JSON.parse(localStorage.getItem('cart')) || [];
  const cartQuantityElement: HTMLElement =
    document.querySelector('.cart-quantity');
  let sumOfProduct = sumProductOfCart(products);

  if (sumOfProduct !== 0) {
    cartQuantityElement.innerHTML = sumOfProduct.toString();
  } else {
    cartQuantityElement.style.visibility = 'hidden';
  }
};

const sumProductOfCart = (products: CartItemType[]) => {
  let sumOfProduct = products.reduce((acc: number, cur: CartItemType) => {
    return acc + cur.quantity;
  }, 0);

  return sumOfProduct;
};

export default render;
