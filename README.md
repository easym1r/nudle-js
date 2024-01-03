# Проект с выводом продуктов (используется чистый JavaScript)

Сборка проекта происходит с помощью Docker-контейнера

Для установки выполните следующие шаги:
1. Создайте директорию под проект (например: cd /var/www/ & mkdir nudle-js)
2. Скачайте файлы проекта в вашу директорию (git clone and e.t.c.)
3. Выполните сборку Docker-контейнера: docker build -t nudle-js .
4. Запустите работу контейнера в отслеживаемом, либо фоновом режиме, порт указывается по вашему желанию: docker run -d -p 80:80 nudle-js
5. Перейдите в вашем браузере по адресу: localhost:80