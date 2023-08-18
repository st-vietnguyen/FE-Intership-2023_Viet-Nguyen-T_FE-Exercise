export class CartItem {
    constructor(cartItem) {
        this.calcDiscountPrice = () => {
            return this.discount
                ? this.price - (this.price * this.discount) / 100
                : this.price;
        };
        const { id, name, price, image, discount, quantity } = cartItem;
        this.id = id;
        this.name = name;
        this.price = price;
        this.image = image;
        this.discount = discount || 0;
        this.quantity = quantity;
    }
}
class Cart {
    constructor(listProduct) {
        this.calcTotalProduct = () => {
            let total = this.listProduct.reduce((acc, cur) => {
                return acc + cur.quantity;
            }, 0);
            return total;
        };
        this.calcTotalPrice = () => {
            let total = this.listProduct.reduce((acc, cur) => acc + new CartItem(cur).calcDiscountPrice() * cur.quantity, 0);
            return total;
        };
        this.listProduct = listProduct;
    }
}
export default Cart;
