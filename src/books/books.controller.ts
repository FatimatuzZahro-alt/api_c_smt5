import { Controller, Get } from '@nestjs/common';
import { BooksService } from './books.service.js';
import { Param } from '@nestjs/common';
import { Post } from '@nestjs/common';
import { Body } from '@nestjs/common';
import { CreateBookDto } from './dto/creat-book-dto.js';
import { Put } from '@nestjs/common';
import { Delete } from '@nestjs/common';

@Controller('books')
export class BooksController {
    constructor(private booksService: BooksService) {}

    //Menampilkan data atau mengambil data
    @Get()
    getAllBooks(): string{
        //logic untuk mengambil semua data buku dari database
        return "Menampilkan semua data buku";
    }

    @Get(':id')
    getBookById(@Param('id') id: string) {
        //logic untuk mengambil data buku berdasarkan id dari database
        return this.booksService.findOne(Number(id));
    }

    //Menyimpan data buku baru
    @Post()
    createBook(@Body() book: CreateBookDto){
        //logic untuk menyimpan data buku baru ke database
        return this.booksService.create(book);
    }

    @Put(':id')
    updateBook(
        @Param('id') id: string,
        @Body() book: CreateBookDto
    ){
        //Logiv untuk mengupdate data buku berdasarkan id dari database
        return this.booksService.update(Number(id), book);
    }

    @Delete(":id")
    deleteBook(@Param('id') id: string){
        //Logic untuk menghapus data buku berdasarkan id dari database
        return this.booksService.delete(Number(id));
    }
}