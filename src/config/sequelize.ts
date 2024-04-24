import { Sequelize } from 'sequelize-typescript';

export const sequelize = new Sequelize({
    dialect: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'your_username',
    password: 'your_password',
    database: 'bookstore_db',
});