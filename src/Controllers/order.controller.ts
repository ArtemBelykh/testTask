import { Controller, Post, Param, Get } from '@nestjs/common';
import {OrderService} from "../Services/order.service";
import {Order} from "../model/order.model";
import { ApiTags } from '@nestjs/swagger';

@ApiTags('order')
@Controller('orders')
export class OrderController {
    constructor(private readonly orderService: OrderService) {}

    @Post(':userId/create')
    async createOrder(@Param('userId') userId: number): Promise<Order> {
        return await this.orderService.create(userId);
    }

    @Get(':userId')
    async findAllByUserId(@Param('userId') userId: number): Promise<Order[]> {
        return await this.orderService.findAllByUserId(userId);
    }
}