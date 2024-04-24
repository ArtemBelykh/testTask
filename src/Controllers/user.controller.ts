import { Controller, Get, Param } from '@nestjs/common';
import {UserService} from "../Services/user.service";
import {User} from "../model/user.model";
import { ApiTags } from '@nestjs/swagger';

@ApiTags('user')
@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get()
    async findAll(): Promise<User[]> {
        return await this.userService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: number): Promise<User> {
        return await this.userService.findOne(id);
    }
}
