import { Injectable } from '@nestjs/common';
import {User} from "../model/user.model";

@Injectable()
export class UserService {
    constructor() {}

    async findAll(): Promise<User[]> {
        return await User.findAll();
    }

    async findOne(id: number): Promise<User> {
        return await User.findByPk(id);
    }

    // Другие методы по желанию
}