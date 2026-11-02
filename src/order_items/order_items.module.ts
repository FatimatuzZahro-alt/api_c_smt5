import { Module } from '@nestjs/common';
import { OrderItemsController } from './order_items.controller.js';
import { OrderItemsService } from './order_items.service.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderItem } from './entity/order-item-entity.js';

@Module({
  controllers: [OrderItemsController],
  providers: [OrderItemsService],
  imports: [TypeOrmModule.forFeature([OrderItem])]
})
export class OrderItemsModule {}
