class CartItem {
    constructor(cartItem) {
        const { id, name, price, image, discount, quantity } = cartItem;
        this.id = id;
        this.name = name;
        this.price = price;
        this.image = image;
        this.discount = discount;
        this.quantity = quantity;
    }
}
export default CartItem;
