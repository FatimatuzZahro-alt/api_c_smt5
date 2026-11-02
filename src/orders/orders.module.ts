import { Module } from '@nestjs/common';
import { OrdersController } from './orders.controller.js';
import { OrdersService } from './orders.service.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from './entity/order-entity.js';

@Module({
  controllers: [OrdersController],
  providers: [OrdersService],
  imports: [TypeOrmModule.forFeature([Order])],
})
export class OrdersModule {}
