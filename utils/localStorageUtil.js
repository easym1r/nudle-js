class LocalStorageUtil {
    constructor() {
        this.keyName = "products";
    }

    /**
     * Получение данных из локального хранилища
     *
     * @returns {any|*[]}
     */
    getProducts() {
        const productsLocalStorage = localStorage.getItem(this.keyName);

        if (productsLocalStorage !== null) {
            return JSON.parse(productsLocalStorage);
        }
        return [];
    }

    /**
     * Запись/удаление данных из локального хранилища
     *
     * @param id - id товара
     *
     * @returns {{pushProduct: boolean, products: (*|*[])}}
     */
    putProducts(id) {
        let products = this.getProducts();
        let pushProduct = false;
        const index = products.indexOf(id);

        if (index === -1) {
            products.push(id);
            pushProduct = true;
        } else {
            products.splice(index, 1);
        }

        localStorage.setItem(this.keyName, JSON.stringify(products));

        return { pushProduct, products }
    }
}

const localStorageUtil = new LocalStorageUtil();