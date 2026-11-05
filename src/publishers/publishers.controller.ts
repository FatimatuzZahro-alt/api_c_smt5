import { Controller, Get } from '@nestjs/common';
import { PublishersService } from './publishers.service.js';
import { Body, Param, Post, Put, Delete } from '@nestjs/common';
import { CreatePublisherDto } from './dto/create-publisher.js';

@Controller('publishers')
export class PublishersController {
    constructor(
        private readonly publishersService: PublishersService
    ) {}

    //menampilkan data publisher
    @Get()
    getAllPublishers() {
        return this.publishersService.findAll();
    }

    //menampilkan data publisher berdasarkan id
    @Get(':id')
    getPublisherById(@Param('id') id: string) {
        return this.publishersService.findOne(id);
    }

    //menambahkan data publisher
    @Post()
    createPublisher(@Body() publisher: CreatePublisherDto) {
        return this.publishersService.create(publisher);
    }

    //mengupdate data publisher berdasarkan id
    @Put(':id')
    updatePublisher(
        @Param('id') id: string,
        @Body() publisher: CreatePublisherDto
    ) {
        return this.publishersService.update(id, publisher);
    }

    //menghapus data publisher berdasarkan id
    @Delete(':id')
    deletePublisher(@Param('id') id: string) {
        return this.publishersService.delete(id);
    }
}
