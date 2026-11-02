import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    JoinColumn,
    CreateDateColumn,
    UpdateDateColumn,
} from 'typeorm';
import type { Relation } from 'typeorm';
import { Order } from '../../orders/entity/order-entity.js';
import { PaymentMethod, PaymentStatus } from '../dto/create-payment.js';

@Entity('payments')
export class Payment {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'uuid', name: 'order_id' })
    orderId: string;

    @ManyToOne(() => Order, (order) => order.payments, { onDelete: 'RESTRICT' })
    @JoinColumn({ name: 'order_id' })
    order: Relation<Order>;

    @Column({ type: 'enum', enum: PaymentMethod })
    method: PaymentMethod;

    @Column({ type: 'decimal', precision: 12, scale: 2 })
    amount: number;

    @Column({ type: 'enum', enum: PaymentStatus, default: PaymentStatus.PENDING })
    status: PaymentStatus;

    @Column({ type: 'varchar', name: 'transaction_id', nullable: true, unique: true })
    transactionId?: string;

    @Column({ type: 'timestamp', name: 'paid_at', nullable: true })
    paidAt?: Date;

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date;
}