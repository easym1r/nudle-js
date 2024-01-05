class Header {
    /**
     * Отображение окна корзины по нажатию на иконку корзины
     */
    handlerOpenShoppingPage() {
        shoppingPage.render();
    }

    /**
     * Формирования и отображение HTML кода
     */
    render (countProductsCart) {
        const html = `
            <div class="header-container">
                <div class="header-title">🎮Майнкрафт-магазин +=)</div>
                <div class="header-counter" onclick="headerPage.handlerOpenShoppingPage()">🛍️Товаров в корзине:  ️${countProductsCart}</div>
            </div>
        `;

        ROOT_HEADER.innerHTML = html;
    }
}

const headerPage = new Header();