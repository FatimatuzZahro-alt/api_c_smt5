import { Controller, Get } from '@nestjs/common';
import { AuthorsService } from './authors.service.js';
import { CreateAuthorDto } from './dto/create-author.js';
import { Body, Param, Post, Put, Delete } from '@nestjs/common';

@Controller('authors')
export class AuthorsController {
    constructor(
        private readonly authorsService: AuthorsService
    ) {}

    //menampilkan data author
    @Get()
    getAllAuthors() {
        return this.authorsService.findAll();
    }

    //menampilkan data author berdasarkan id
    @Get(':id')
    getAuthorById(@Param('id') id: string) {
        return this.authorsService.findOne(id);
    }

    //menambahkan data auhtor 
    @Post()
    createAuthor(@Body() author: CreateAuthorDto) {
        return this.authorsService.create(author);
    }

    //mengupdate data author berdasarkan id
    @Put(':id')
    updateAuthor(
        @Param('id') id: string,
        @Body() author: CreateAuthorDto
    ) {
        return this.authorsService.update(id, author);
    }

    //menghapus data author berdasarkan id
    @Delete(':id')
    deleteAuthor(@Param('id') id: string) {
        return this.authorsService.delete(id);
    }
}
