import { Controller, Get, Param } from '@nestjs/common';
import {OrderItemService} from "../Services/order-item.service";
import {OrderItem} from "../model/order-item.model";
import { ApiTags } from '@nestjs/swagger';

@ApiTags('orderItem')
@Controller('order-items')
export class OrderItemController {
    constructor(private readonly orderItemService: OrderItemService) {}

    @Get()
    async findAll(): Promise<OrderItem[]> {
        return await this.orderItemService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: number): Promise<OrderItem> {
        return await this.orderItemService.findOne(id);
    }
}