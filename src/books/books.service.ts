import { Injectable } from '@nestjs/common';
import { Book } from './entities/book-entity.js';
import { CreateBookDto } from './dto/creat-book-dto.js';


@Injectable() // '@' dibaca decorator, digunakan untuk menandai class sebagai provider yang dapat diinject ke dalam class lain
export class BooksService {

    private books: Book[] = [
        {
            id: 1,
            name: 'Buku 1',
            author: 'Penulis 1',
            isbn: '1234567890',
            publishedYear: 2020,
            isAvailable: true
        },
        {
            id: 2,
            name: 'Buku 2',
            author: 'Penulis 2',
            isbn: '0987654321',
            publishedYear: 2021,
            isAvailable: true
        }
    ];

    //menampilkan semua data buku
    findAll(): Book[] {
        return this.books;
    }

    //mengambil data buku berdasarkan id dari databese
    findOne(id: number): Book | undefined {
        return this.books.find(book => book.id === id);
    }

    //menyimpan data buku baru ke database
    create(book: CreateBookDto): Book {

        const newBook: Book = {
            id: this.books.length + 1,
            name: book.name,
            author: book.author,
            isbn: book.isbn,
            publishedYear: book.publishedYear,
            isAvailable: true
        };
        //simpan ke database
        this.books.push(newBook);
        return newBook;
    }

    //Mengupdate data buku berdasarkan id dari database
    update(id: number, book: CreateBookDto): Book | undefined {
        const index = this.books.findIndex(b => b.id === id);
        if (index !== -1) {
            this.books[index] = { ...this.books[index], ...book };
            return this.books[index];
        }
        return undefined;
    }

    //Menghapus data buku berdasarkan id dari database
    delete(id: number): boolean {   
        const index = this.books.findIndex(b => b.id === id);
        if (index !== -1) {
            this.books.splice(index, 1);
            return true;
        }
        return false;
    }
}