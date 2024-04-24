import { Controller, Get, Param } from '@nestjs/common';
import {BookService} from "../Services/book.service";
import {Book} from "../model/book.model";
import { ApiTags } from '@nestjs/swagger';


@ApiTags('book')
@Controller('books')
export class BookController {
    constructor(private readonly bookService: BookService) {}

    @Get('author/:authorId')
    async findByAuthor(@Param('authorId') authorId: number): Promise<Book[]> {
        return await this.bookService.findByAuthor(authorId);
    }

    @Get('title/:title')
    async findByTitle(@Param('title') title: string): Promise<Book[]> {
        return await this.bookService.findByTitle(title);
    }
}