class CartService {
    constructor() {
        if(CartService.instance) {
            return CartService.instance
        }

        this.items = [];
        this.subscribers = [];
        
        CartService.instance = this;
    }

    addItem(product) {
        this.items = [...this.items, product];
        this.notify();
    }

    getItems() {
        return this.items
    }

    subscribe(callback) {
        this.subscribers.push(callback)
    }

    notify() {
        this.subscribers.forEach(sub => sub(this.items));
    }
}

const cartService = new CartService();
export default cartService;