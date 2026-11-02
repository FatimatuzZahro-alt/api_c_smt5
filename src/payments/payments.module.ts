import { Module } from '@nestjs/common';
import { PaymentsController } from './payments.controller.js';
import { PaymentsService } from './payments.service.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Payment } from './entity/payment-entity.js';

@Module({
  controllers: [PaymentsController],
  providers: [PaymentsService],
  imports: [TypeOrmModule.forFeature([Payment])],
})
export class PaymentsModule {}
