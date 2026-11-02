import {
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    DeleteDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    ManyToOne,
    JoinColumn,
    OneToMany,
} from 'typeorm';
import type { Relation } from 'typeorm';
import { Category } from '../../categories/entity/category-entity.js';
import { BookAuthor } from '../../book_authors/entity/book-author-entity.js';
import { OrderItem } from '../../order_items/entity/order-item-entity.js';

@Entity('books')
export class Book {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'varchar', length: 64 })
    name: string;

    @Column({ type: 'varchar', length: 128 })
    author: string;

    @Column({ type: 'varchar' })
    isbn: string;

    @Column({ type: 'int' })
    publishedYear: number;

    @Column({ type: 'boolean', default: true })
    isAvailable: boolean;

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date;

    @DeleteDateColumn({ name: 'deleted_at', nullable: true })
    deletedAt: Date;

    @Column({ nullable: true })
    categoryId: number;

    @ManyToOne(() => Category, (category) => category.books, { onDelete: 'SET NULL' })
    @JoinColumn({ name: 'categoryId' })
    category: Relation<Category>;

    @OneToMany(() => BookAuthor, (bookAuthor) => bookAuthor.book)
    bookAuthors: Relation<BookAuthor[]>;

    @OneToMany(() => OrderItem, (item) => item.book)
    orderItems: Relation<OrderItem[]>;
}