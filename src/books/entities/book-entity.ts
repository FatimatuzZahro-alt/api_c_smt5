import {
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    DeleteDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    ManyToOne,
    OneToMany,
    JoinColumn,
} from 'typeorm';
import type { Relation } from 'typeorm';
import { Category } from '../../categories/entity/category-entity.js';
import { Publisher } from '../../publishers/entity/publisher-entity.js';
import { BookAuthor } from '../../book_authors/entity/book-author-entity.js';
import { OrderItem } from '../../order_items/entity/order-item-entity.js';

@Entity({ name: 'books' })
export class Book {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'varchar', length: 30 })
    title: string;

    @Column({ type: 'varchar', length: 45, unique: true })
    isbn: string;

    @Column({ type: 'int', default: 0, name: 'published_year' })
    publishedYear: number;

    @Column({ type: 'boolean', default: true, name: 'is_available' })
    isAvailable: boolean;

    @Column({ type: 'decimal', precision: 12, scale: 2, default: 0 })
    price: number;

    @Column({ type: 'int', default: 0 })
    stock: number;

    @Column({ type: 'uuid', name: 'category_id', nullable: true })
    categoryId: string | null;

    @ManyToOne(() => Category, (category) => category.books, { onDelete: 'SET NULL' })
    @JoinColumn({ name: 'category_id' })
    category: Relation<Category>;

    @Column({ type: 'uuid', name: 'publisher_id', nullable: true })
    publisherId: string | null;

    @ManyToOne(() => Publisher, (publisher) => publisher.books, { onDelete: 'SET NULL' })
    @JoinColumn({ name: 'publisher_id' })
    publisher: Relation<Publisher>;

    @OneToMany(() => BookAuthor, (bookAuthor) => bookAuthor.book)
    bookAuthors: Relation<BookAuthor[]>;

    @OneToMany(() => OrderItem, (item) => item.book)
    orderItems: Relation<OrderItem[]>;

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date;

    @DeleteDateColumn({ name: 'deleted_at', nullable: true })
    deletedAt: Date | null;
}