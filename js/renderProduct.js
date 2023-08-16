import generateElement from './generateElement.js';

const render = (data) => {
  if (data && data.length) {
    const productContainer = document.querySelector(
      '.section-products .container'
    );
    const newProductContainer = document.querySelector(
      '.section-new-products .container'
    );
    const  productList = generateElement('ul', ['product-list', 'row']);
    let productItem = '';

    data.forEach((product) => {
      productItem += `<li class="product-item col-3 col col-md-6">
        <a class="product-link">
          <div class="product">
            <div class="product-image-wrapper">
              ${product.discount ? `<tag class="tag tag-red">-${product.discount}%</tag>` : ''}
              <img class="product-image" src='${product.image}'/>
                <icon class="icon icon-cart" data-index=${product.id}></icon>
            </div>
            <h4 class="product-name">${product.name}</h4>
            <div class="product-price-wrapper">
              <span class="price-offical price-sale">${
                product.discount
                  ? (product.price - ((product.discount * product.price) / 100)).toFixed(2)
                  : product.price
              }</span>
              <span class="cost">${product.price}</span>
            </div>
          </div>
        </a>
      </li>`;
    });
    productList.innerHTML = productItem;
    productContainer.appendChild(productList);
    newProductContainer.appendChild(productList.cloneNode(true))
  }
};

export default render;
