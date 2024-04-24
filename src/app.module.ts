import {Module} from '@nestjs/common';
import {SequelizeModule} from '@nestjs/sequelize';
import {UserController} from "./Controllers/user.controller";
import {UserService} from "./Services/user.service";
import {User} from "./model/user.model";
import {Book} from "./model/book.model";
import {Author} from "./model/author.model";
import {Order} from "./model/order.model";
import {OrderItem} from "./model/order-item.model";
import {BookController} from "./Controllers/book.controller";
import {AuthorController} from "./Controllers/author.controller";
import {OrderController} from "./Controllers/order.controller";
import {OrderItemController} from "./Controllers/order-item.controller";
import {BookService} from "./Services/book.service";
import {AuthorService} from "./Services/author.service";
import {OrderService} from "./Services/order.service";
import {OrderItemService} from "./Services/order-item.service";
import * as process from "process";
import {ConfigModule} from "@nestjs/config";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT) || 5432,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      autoLoadModels: true,
      synchronize: true
    }),
    SequelizeModule.forFeature([User, Book, Author, Order, OrderItem]),
  ],
    controllers: [UserController, BookController, AuthorController, OrderController, OrderItemController],
    providers: [UserService, BookService, AuthorService, OrderService, OrderItemService],
})

export class AppModule {
}