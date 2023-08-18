class Product {
    constructor(product) {
        const { id, name, price, image, discount, status } = product;
        this.id = id;
        this.name = name;
        this.price = price;
        this.image = image;
        this.discount = discount;
        this.status = status;
    }
}
export default Product;
