import { Module } from '@nestjs/common';
import { AuthorsController } from './authors.controller.js';
import { AuthorsService } from './authors.service.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Author } from './entity/author-entity.js';

@Module({
  controllers: [AuthorsController],
  providers: [AuthorsService],
  imports: [TypeOrmModule.forFeature([Author])],
})
export class AuthorsModule {}
