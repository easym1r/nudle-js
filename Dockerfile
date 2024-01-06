# Используем базовый образ Alpine
FROM alpine:3.14

# Обновляем пакеты системы и устанавливаем NGINX
RUN apk update && apk upgrade && apk add nginx

# Открываем рабочий порт
EXPOSE 80

# Копирование всех файлов текущей рабочей директории в директории по умолчанию для сервера NGINX
COPY . /usr/share/nginx/html

# Копирование рабочей конфигурацию nginx в путь к конфигурации nginx внутри alpine
COPY nginx.conf /etc/nginx/http.d/default.conf

# Запускаем NGINX
CMD ["nginx", "-g", "daemon off;"]