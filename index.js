/**
 * Отображение HTML кода
 */
function render() {
    const productsStore = localStorageUtil.getProducts();

    headerPage.render(productsStore.length);
    productsPage.render();
}

spinnerPage.render();

let CATALOG = [];
/**
 * Получение данных
 *
 * Локально данные хранятся в server/catalog.json, но был использован один из сервисов для хостинга JSON, чтобы лучше имитировать работу Fetch API
 * Используемый сервис не гарантирует работу в любой момент, поэтому у себя измените путь на локальный каталог, либо перехостите JSON самостоятельно
 */
fetch('https://api.npoint.io/a6499aa47e6dc47697cb')
    .then(response => response.json())
    .then(body => {
        CATALOG = body;
        spinnerPage.handleCloseSpinner();
        render();
    })
    .catch(error => {
        spinnerPage.handleCloseSpinner();
        errorPage.render();
        console.log(error);
    });