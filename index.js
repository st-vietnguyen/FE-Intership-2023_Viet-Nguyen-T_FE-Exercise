var data = [
  {
    id: 0,
    name: 'T-shirt Summer Vibes',
    price: 199.99,
    discount: 30,
    image: '../assets/images/product-1.png',
    quantity: 14,
  },
  {
    id: 1,
    name: 'T-shirt Summer Vibes',
    price: 199.99,
    discount: 0,
    image: '../assets/images/product-2.png',
    quantity: 11,
  },
  {
    id: 2,
    name: 'T-shirt Summer Vibes',
    price: 199.99,
    discount: 20,
    image: '../assets/images/product-3.png',
    quantity: 6,
  },
  {
    id: 3,
    name: 'T-shirt Summer Vibes',
    price: 199.99,
    discount: 10,
    image: '../assets/images/product-4.png',
    quantity: 10,
  },
];

var productContainer = document.querySelector('.section-products .container');
var newProductContainer = document.querySelector(
  '.section-new-products .container'
);

function renderListProduct() {
  var productList = document.createElement('ul');
  productList.className = 'product-list row';

  data.forEach(function (product) {
    var productItem = document.createElement('li');
    productItem.className = 'product-item col col-3 col-md-6';

    var productLink = document.createElement('a');
    productLink.className = 'product-link';

    var productElement = document.createElement('div');
    var productImgWrapper = document.createElement('div');
    productImgWrapper.className = 'product-image-wrapper';
    productElement.className = 'product';
    productElement.dataset.index = product.id;
    if (product.discount) {
      var tag = document.createElement('span');
      tag.className = 'tag tag-red';
      tag.innerHTML = '-' + product.discount + '%';
      productImgWrapper.append(tag);
    }

    var iconCart = document.createElement('i');
    iconCart.className = 'icon icon-cart';

    var productImg = document.createElement('img');
    productImg.src = product.image;
    productImg.className = 'product-image';

    productImgWrapper.append(productImg, iconCart);
    var productName = document.createElement('h4');
    productName.innerHTML = product.name;
    productName.className = 'product-name';

    var productPriceWrapper = document.createElement('div');
    productPriceWrapper.className = 'product-price-wrapper';

    var priceOffical = document.createElement('span');
    priceOffical.className = 'price-offical';
    var cost = document.createElement('span');
    cost.className = 'cost';

    if (product.discount !== 0) {
      priceOffical.innerHTML =
        '$' +
        (product.price - (product.discount * product.price) / 100).toFixed(2);
      priceOffical.classList.add('price-sale');
      cost.innerHTML = '$' + product.price;
    } else {
      priceOffical.innerHTML = '$' + product.price;
      cost.style.display = 'none';
    }

    productPriceWrapper.append(priceOffical, cost);
    productElement.append(productImgWrapper, productName, productPriceWrapper);
    productLink.appendChild(productElement);
    productItem.appendChild(productLink);
    productList.appendChild(productItem);
  });
  return productList;
}

productContainer.appendChild(renderListProduct());
newProductContainer.appendChild(renderListProduct());

var productList = document.querySelectorAll('.product-list .product');
var cartQuantity = document.querySelector('.cart-quantity');
var products = JSON.parse(localStorage.getItem('products')) ?? [];

productList.forEach((productElement) => {
  productElement.addEventListener('click', function () {
    var productIndex = productElement.getAttribute('data-index');
    var product = products.find(function (prd) {
      return prd.id === Number.parseInt(productIndex);
    });
    if (!product) {
      product = JSON.parse(JSON.stringify(data[productIndex]));
      product.quantity = 1;
      products.push(product);
    } else {
      product.quantity += 1;
    }
    sumProductOfCart(cartQuantity, products);
    localStorage.setItem('products', JSON.stringify(products));
  });
});

sumProductOfCart(cartQuantity, products);

function sumProductOfCart(cartQuantityElement, products) {
  var sumOfProduct = products.reduce((acc, cur) => {
    return acc + cur.quantity;
  }, 0);
  if (sumOfProduct !== 0) {
    cartQuantityElement.innerHTML = sumOfProduct;
  } else {
    cartQuantity.style.display = 'none';
  }
}
