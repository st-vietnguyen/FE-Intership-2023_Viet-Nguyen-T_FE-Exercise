class Product {
  constructor(product) {
    const { id, name, price, image, discount } = product;
    this.id = id;
    this.name = name;
    this.price = price;
    this.image = image;
    this.discount = discount;
  }
}

export default Product;
