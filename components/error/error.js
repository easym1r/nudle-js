class Error {
    /**
     * Формирование и отображение HTML кода
     */
    render() {
        const html = `
            <div class="error-container">
                <div class="error-message">
                    <h2>Ошибка в получение данных с сервера =(</h2>
                    <p>Обратитесь к администратору, либо зайдите позже</p>
                </div>
            </div>
        `;

        ROOT_ERROR.innerHTML = html;
    }
}

const errorPage = new Error();
