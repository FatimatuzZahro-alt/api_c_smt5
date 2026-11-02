import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    DeleteDateColumn,
    OneToMany,
} from 'typeorm';
import { BookAuthor } from '../../book_authors/entity/book-author-entity.js';
import type { Relation } from 'typeorm';

@Entity('authors')
export class Author {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'varchar', length: 128 })
    name: string;

    @Column({ type: 'varchar', unique: true, nullable: true })
    email?: string;

    @Column({ type: 'varchar', length: 100, nullable: true })
    nationality?: string;

    @Column({ type: 'date', name: 'birth_date', nullable: true })
    birthDate?: Date;

    @Column({ type: 'text', nullable: true })
    bio?: string;

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date;

    @DeleteDateColumn({ name: 'deleted_at', nullable: true })
    deletedAt: Date;

    @OneToMany(() => BookAuthor, (bookAuthor) => bookAuthor.author)
    bookAuthors: Relation<BookAuthor[]>;
}