import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    JoinColumn,
} from 'typeorm';
import type { Relation } from 'typeorm';
import { Order } from '../../orders/entity/order-entity.js';
import { Book } from '../../books/entities/book-entity.js';

@Entity('order_items')
export class OrderItem {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'uuid', name: 'order_id' })
    orderId: string;

    @Column({ type: 'uuid', name: 'book_id' })
    bookId: string;

    @ManyToOne(() => Order, (order) => order.orderItems, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'order_id' })
    order: Relation<Order>;

    @ManyToOne(() => Book, (book) => book.orderItems, { onDelete: 'RESTRICT' })
    @JoinColumn({ name: 'book_id' })
    book: Relation<Book>;

    @Column({ type: 'int' })
    quantity: number;

    @Column({ type: 'decimal', precision: 12, scale: 2 })
    price: number;

    @Column({ type: 'decimal', precision: 12, scale: 2 })
    subtotal: number;
}