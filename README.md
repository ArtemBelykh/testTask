
# Тестовое задание в Уралэнергосбыт

Задание:
Сделать проект c функционалом покупки книг
1. Модели user, book, author. Отношения один ко многим, многие ко многим
2. Фронт не нужен
3. Авторизация не нужна
4. Функционал – формирование заказа, поиск по заказам, поиск по автору, по названию
5. Остальной функционал по желанию


## Стек проекта

**Server:** Node, Nestjs, Sequelize, Postgres

## Как установить и запустить проект?


**Перед установкой и запуском необходимо создать файл **.env** и прописать следующие параметры:**

* `DB_HOST=your_host`
* `DB_PORT=54322`
* `DB_USERNAME=postgres`
* `DB_PASSWORD=your_pass`
* `DB_NAME=bookstore`
* `APP_PORT=5050`



**Клонируем проект**

```bash
  git clone git@github.com:ArtemBelykh/testTask.git
```

**Устанавливаем зависимости**

```bash
  npm install
```

**Запускаем проект в *dev* режиме**

```bash
  npm run start:dev
```



## Использование API
Документация по API находится по адресу:  
``http://localhost:5050/docs``



## Поддержка

Если у вас есть вопросы или предложения по улучшению этого API, пожалуйста, создайте ``issue`` в этом репозитории.

