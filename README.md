# Проект-продуктовый каталог (реализация на чистом JavaScript)

В проекте используется: HTML, CSS, JS, Работа с LocalStorage, AJAX, Docker, Docker-compose

Сборка проекта происходит с помощью Docker-контейнера (docker-compose)

Для установки выполните следующие шаги:
1. Создайте директорию под проект (например: cd /var/www/ & mkdir nudle-js)
2. Скачайте файлы проекта в вашу директорию (git clone and e.t.c.)
3. Запустите работу контейнера в отслеживаемом, либо фоновом режиме, порт указывается по вашему желанию, по умолчанию стоит порт 80. Команда для сборки и запуска контейнера: docker-compose up -d (для остановки и очистки контейнера выполните: docker-compose down)
4. Перейдите в вашем браузере по адресу: localhost:80

Скриншоты проекта:

![Главная страница](https://github.com/easym1r/nudle-js/blob/main/img/readme/ProductsPage.png)

![Корзина](https://github.com/easym1r/nudle-js/blob/main/img/readme/ShoppingPage.png)

![Страница загрузки](https://github.com/easym1r/nudle-js/blob/main/img/readme/SpinnerPage.png)

![Страница с ошибкой](https://github.com/easym1r/nudle-js/blob/main/img/readme/ErrorPage.png)