import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Author } from './entity/author-entity.js';
import { CreateAuthorDto } from './dto/create-author.js';

@Injectable()
export class AuthorsService {
    constructor(
        @InjectRepository(Author) 
        private readonly authorRepository: Repository<Author>,
    ) {}

    //menampilkan data author berdasarkan id
    async findAll(): Promise<Author[]> {
        return await this.authorRepository.find({
            order: {createdAt: 'DESC'}
        });
    }

    //menampilkan data author berdasarkan id
    async findOne(id: string): Promise<Author> {
        //cari dulu author berdasarkan id
        const author = await this.authorRepository.findOneBy({id});

        //jika author tidak ditemukan
        if (!author) {
            throw new Error(`Author with id ${id} not found`);
        }
        return author;
    }

    // menambahkan data author baru ke database
    async create(author: CreateAuthorDto): Promise<Author> {
        const newAuthor = this.authorRepository.create(author)
    
        return await this.authorRepository.save(newAuthor);
    }
    
            
    // mengupdate data author berdasarkan id dari database
    async update(id: string, author: CreateAuthorDto): Promise<Author> {
        const existingAuthor = await this.authorRepository.findOneBy({id});

        //jika author tidak ditemukan
        if (!existingAuthor) {
            throw new Error(`Author with id ${id} not found`);
        }
                
        //update data author
        const updatedAuthor = Object.assign(existingAuthor, author);
        return await this.authorRepository.save(updatedAuthor);
    }

    // menghapus data author berdasarkan id dari database
    async delete(id: string): Promise<{ message: string; deletedId: string }> {
        await this.findOne(id);
        await this.authorRepository.softDelete(id);
        return { message: 'Author berhasil dihapus', deletedId: id };
    }
    
}
