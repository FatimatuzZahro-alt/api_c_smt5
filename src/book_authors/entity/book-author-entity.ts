import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    JoinColumn,
    CreateDateColumn,
    Unique,
} from 'typeorm';
import type { Relation } from 'typeorm';
import { Book } from '../../books/entities/book-entity.js';
import { Author } from '../../authors/entity/author-entity.js';

@Entity('book_authors')
@Unique(['bookId', 'authorId'])
export class BookAuthor {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'uuid', name: 'book_id' })
    bookId: string;

    @Column({ type: 'uuid', name: 'author_id' })
    authorId: string;

    @ManyToOne(() => Book, (book) => book.bookAuthors, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'book_id' })
    book: Relation<Book>;

    @ManyToOne(() => Author, (author) => author.bookAuthors, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'author_id' })
    author: Relation<Author>;

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;
}