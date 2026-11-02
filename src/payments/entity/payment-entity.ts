import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToOne,
    JoinColumn,
    CreateDateColumn,
} from 'typeorm';
import type { Relation } from 'typeorm';
import { Order } from '../../orders/entity/order-entity.js';

@Entity('payments')
export class Payment {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'uuid', name: 'order_id', unique: true })
    orderId: string;

    @OneToOne(() => Order, (order) => order.payment, { onDelete: 'RESTRICT' })
    @JoinColumn({ name: 'order_id' })
    order: Relation<Order>;

    @Column({ type: 'varchar', length: 50, name: 'payment_method' })
    paymentMethod: string;

    @Column({ type: 'decimal', precision: 12, scale: 2 })
    amount: number;

    @Column({ type: 'varchar', length: 30, default: 'pending' })
    status: string;

    @Column({ type: 'timestamp', name: 'paid_at', nullable: true })
    paidAt: Date | null;

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;
}