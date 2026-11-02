import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToMany,
    CreateDateColumn,
    UpdateDateColumn,
} from 'typeorm';
import type { Relation } from 'typeorm';
import { Book } from '../../books/entities/book-entity.js';

@Entity('publishers')
export class Publisher {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'varchar', length: 150 })
    name: string;

    @OneToMany(() => Book, (book) => book.publisher)
    books: Relation<Book[]>;

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date;
}