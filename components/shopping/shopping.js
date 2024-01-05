class Shopping {
    /**
     * Закрытие окна с корзиной через очистку HTML кода
     */
    handleCloseShoppingPage() {
        ROOT_SHOPPING.innerHTML = '';
    }

    /**
     * Формирования и отображение HTML кода
     */
    render() {
        const productsStore = localStorageUtil.getProducts();
        let htmlCatalog = '';
        let sumCatalog = 0;

        CATALOG.forEach(({ id, name, price }) => {
            if (productsStore.indexOf(id) !== -1) {
                htmlCatalog += `
                    <tr>
                        <td class="shopping-element__name">📌${name}</td>
                        <td class="shopping-element__price">💎${price}</td>
                    </tr>
                `;

                sumCatalog += price;
            }
        });

        const html = `
            <div class="shopping-container">
                <div class="shopping__close" onclick="shoppingPage.handleCloseShoppingPage()"></div>
                <table>
                    <tr>
                        <td>Товары в корзине:</td>
                    </tr>
                    ${htmlCatalog}
                    <tr>
                        <td class="shopping-element__name">Общая сумма товаров в корзине:</td>
                        <td class="shopping-element__price">💎${sumCatalog.toLocaleString()}</td>
                    </tr>
                </table>
            </div>
        `;
        ROOT_SHOPPING.innerHTML = html;
    }
}

const shoppingPage = new Shopping();