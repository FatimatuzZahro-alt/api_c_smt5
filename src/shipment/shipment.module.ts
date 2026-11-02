import { Module } from '@nestjs/common';
import { ShipmentController } from './shipment.controller.js';
import { ShipmentService } from './shipment.service.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Shipment } from './entity/shipment-entity.js';

@Module({
  controllers: [ShipmentController],
  providers: [ShipmentService],
  imports: [TypeOrmModule.forFeature([Shipment])],
})
export class ShipmentModule {}
