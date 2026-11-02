import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToMany,
    CreateDateColumn,
    UpdateDateColumn,
} from 'typeorm';
import type { Relation } from 'typeorm';
import { BookAuthor } from '../../book_authors/entity/book-author-entity.js';

@Entity('authors')
export class Author {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'varchar', length: 150 })
    name: string;

    @OneToMany(() => BookAuthor, (bookAuthor) => bookAuthor.author)
    bookAuthors: Relation<BookAuthor[]>;

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date;
}