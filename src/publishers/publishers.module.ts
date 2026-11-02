import { Module } from '@nestjs/common';
import { PublishersController } from './publishers.controller.js';
import { PublishersService } from './publishers.service.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Publisher } from './entity/publisher-entity.js';

@Module({
  controllers: [PublishersController],
  providers: [PublishersService],
  imports: [TypeOrmModule.forFeature([Publisher])],
})
export class PublishersModule {}
