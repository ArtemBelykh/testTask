import { Injectable } from '@nestjs/common';
import { Op } from 'sequelize';
import {Book} from "../model/book.model";

@Injectable()
export class BookService {
    constructor() {}

    async findByAuthor(authorId: number): Promise<Book[]> {
        return await Book.findAll({ where: { authorId } });
    }

    async findByTitle(title: string): Promise<Book[]> {
        return await Book.findAll({ where: { title: { [Op.iLike]: `%${title}%` } } });
    }
}