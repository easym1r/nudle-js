class Products {
    constructor() {
        this.classNameActive = 'products-element__button_active';
        this.labelAdd = 'Добавить в корзину';
        this.labelRemove = 'Удалить из корзины';
    }

    /**
     * Обработчик нажатия на кнопку (добавление/удаление элемента из локального хранилища)
     *
     * @param element - HTML элемент
     * @param id - id продукта
     */
    handleSetLocalStorage(element, id) {
        const result = localStorageUtil.putProducts(id);

        if (result.pushProduct) {
            element.classList.add(this.classNameActive);
            element.innerHTML = this.labelRemove;
        } else {
            element.classList.remove(this.classNameActive);
            element.innerHTML = this.labelAdd;
        }

        headerPage.render(result.products.length);
    }

    /**
     * Формирования и отображение HTML кода
     */
    render() {
        const productsStore = localStorageUtil.getProducts();
        let htmlCatalog = '';

        CATALOG.forEach(({ id, name, img, price }) => {
            let activeClass = '';
            let activeText = '';

            if (productsStore.indexOf(id) === -1) {
                activeText = this.labelAdd;
            } else {
                activeClass = ' ' + this.classNameActive;
                activeText = this.labelRemove;
            }

            htmlCatalog += `
                <li class="products-element">
                    <span class="products-element__name">${name}</span>
                    <img class="products-element__img" src="${img}" alt="Product Image">
                    <span class="products-element__price">💎${price}</span>
                    <button class="products-element__button${activeClass}" onclick="productsPage.handleSetLocalStorage(this, '${id}')">${activeText}</button>
                </li>
            `;
        });

        const html = `
            <ul class="products-container">
                ${htmlCatalog}
            </ul>
        `;

        ROOT_PRODUCTS.innerHTML = html;
    }
}

const productsPage = new Products();