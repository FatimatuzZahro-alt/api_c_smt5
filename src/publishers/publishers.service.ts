import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePublisherDto } from './dto/create-publisher.js';
import { Publisher } from './entity/publisher-entity.js';

@Injectable()
export class PublishersService {
    constructor(
        @InjectRepository(Publisher) 
        private readonly publisherRepository: Repository<Publisher>,
    ) {}

    //menampilkan data publisher berdasarkan id
    async findAll(): Promise<Publisher[]> {
        return await this.publisherRepository.find({
            order: {createdAt: 'DESC'}
        });
    }

    //menampilkan data publisher berdasarkan id
    async findOne(id: string): Promise<Publisher> {
        //cari dulu publisher berdasarkan id
        const publisher = await this.publisherRepository.findOneBy({id});

        //jika publisher tidak ditemukan
        if (!publisher) {
            throw new Error(`Publisher with id ${id} not found`);
        }
        return publisher;
    }

    // menambahkan data publisher baru ke database
    async create(publisher: CreatePublisherDto): Promise<Publisher> {
        const newPublisher = this.publisherRepository.create(publisher);
        return await this.publisherRepository.save(newPublisher);
    }

    // mengupdate data publisher berdasarkan id dari database
    async update(id: string, publisher: CreatePublisherDto): Promise<Publisher> {
        const existingPublisher = await this.publisherRepository.findOneBy({id});

        //jika publisher tidak ditemukan
        if (!existingPublisher) {
            throw new Error(`Publisher with id ${id} not found`);
        }
                
        //update data publisher
        const updatedPublisher = Object.assign(existingPublisher, publisher);
        return await this.publisherRepository.save(updatedPublisher);
    }

    // menghapus data publisher berdasarkan id dari database
    async delete(id: string): Promise<{ message: string; deletedId: string }> {
        await this.findOne(id);
        await this.publisherRepository.softDelete(id);
        return { message: 'Publisher berhasil dihapus', deletedId: id };
    }
    
}
