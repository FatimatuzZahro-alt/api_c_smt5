import {
    Entity,
    PrimaryColumn,
    ManyToOne,
    JoinColumn,
} from 'typeorm';
import type { Relation } from 'typeorm';
import { Book } from '../../books/entities/book-entity.js';
import { Author } from '../../authors/entity/author-entity.js';

@Entity('book_authors')
export class BookAuthor {
    @PrimaryColumn({ type: 'uuid', name: 'book_id' })
    bookId: string;

    @PrimaryColumn({ type: 'uuid', name: 'author_id' })
    authorId: string;

    @ManyToOne(() => Book, (book) => book.bookAuthors, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'book_id' })
    book: Relation<Book>;

    @ManyToOne(() => Author, (author) => author.bookAuthors, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'author_id' })
    author: Relation<Author>;
}