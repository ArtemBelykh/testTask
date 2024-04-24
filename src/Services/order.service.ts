import { Injectable } from '@nestjs/common';
import {Order} from "../model/order.model";

@Injectable()
export class OrderService {
    constructor() {}

    async create(userId: number): Promise<Order> {
        return await Order.create({ userId, status: 'pending' });
    }

    async findAllByUserId(userId: number): Promise<Order[]> {
        return await Order.findAll({ where: { userId } });
    }
}