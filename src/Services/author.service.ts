import { Injectable } from '@nestjs/common';
import {Author} from "../model/author.model";

@Injectable()
export class AuthorService {
    constructor() {}

    async findAll(): Promise<Author[]> {
        return await Author.findAll();
    }

    async findOne(id: number): Promise<Author> {
        return await Author.findByPk(id);
    }

    // Другие методы по желанию
}