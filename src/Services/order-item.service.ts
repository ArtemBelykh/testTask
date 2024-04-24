import { Injectable } from '@nestjs/common';
import {OrderItem} from "../model/order-item.model";

@Injectable()
export class OrderItemService {
    constructor() {}

    async findAll(): Promise<OrderItem[]> {
        return await OrderItem.findAll();
    }

    async findOne(id: number): Promise<OrderItem> {
        return await OrderItem.findByPk(id);
    }

    // Другие методы по желанию
}