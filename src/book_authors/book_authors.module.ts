import { Module } from '@nestjs/common';
import { BookAuthorsController } from './book_authors.controller.js';
import { BookAuthorsService } from './book_authors.service.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookAuthor } from './entity/book-author-entity.js';

@Module({
  controllers: [BookAuthorsController],
  providers: [BookAuthorsService],
  imports: [TypeOrmModule.forFeature([BookAuthor])],
})
export class BookAuthorsModule {}
