class Spinner {
    /**
     * Закрытие отображения загрузки
     */
    handleCloseSpinner() {
        ROOT_SPINNER.innerHTML = '';
    }

    /**
     * Формирование и отображение HTML кода
     */
    render() {
        const html = `
            <div class="spinner-container">
                <img class="spinner__img" src="/components/spinner/img/loader.svg">
            </div>
        `;

        ROOT_SPINNER.innerHTML = html;
    }
}

const spinnerPage = new Spinner();