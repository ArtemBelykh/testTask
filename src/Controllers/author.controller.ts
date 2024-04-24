import { Controller, Get, Param } from '@nestjs/common';
import {AuthorService} from "../Services/author.service";
import {Author} from "../model/author.model";
import { ApiTags } from '@nestjs/swagger';

@ApiTags('author')
@Controller('authors')
export class AuthorController {
    constructor(private readonly authorService: AuthorService) {}

    @Get()
    async findAll(): Promise<Author[]> {
        return await this.authorService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: number): Promise<Author> {
        return await this.authorService.findOne(id);
    }
}