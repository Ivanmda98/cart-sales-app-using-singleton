class FavoriteService {
    constructor() {
        if(FavoriteService.instance) {
            return FavoriteService.instance
        }

        this.favoriteItems = [];
        this.subscribers = [];

        FavoriteService.instance = this;
    }

    addFavoriteItem(product) {
        this.favoriteItems = [...this.favoriteItems, product];
        this.notify();
    }

    removeFavoriteItem(productId) {
        this.favoriteItems = this.favoriteItems.filter(product => product.id !== productId);
        this.notify();
    }

    getFavoriteItems() {
        console.log(this.favoriteItems)
        return this.favoriteItems;
    }

    subscribeFavoriteItems(callback) {
        this.subscribers.push(callback);
    }

    notify() {
        this.subscribers.forEach(sub => sub(this.favoriteItems));
    }

}
const favoriteService = new FavoriteService();
export default favoriteService;