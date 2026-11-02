import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    OneToMany,
    OneToOne,
    JoinColumn,
    CreateDateColumn,
    UpdateDateColumn,
} from 'typeorm';
import type { Relation } from 'typeorm';
import { Customer } from '../../customers/entities/customers-entity.js';
import { OrderItem } from '../../order_items/entity/order-item-entity.js';
import { Payment } from '../../payments/entity/payment-entity.js';
import { Shipment } from '../../shipment/entity/shipment-entity.js';

@Entity('orders')
export class Order {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'uuid', name: 'customer_id' })
    customerId: string;

    @ManyToOne(() => Customer, (customer) => customer.orders, { onDelete: 'RESTRICT' })
    @JoinColumn({ name: 'customer_id' })
    customer: Relation<Customer>;

    @Column({ type: 'varchar', length: 50, name: 'order_number', unique: true })
    orderNumber: string;

    @Column({ type: 'varchar', length: 30, default: 'pending' })
    status: string;

    @Column({ type: 'decimal', precision: 12, scale: 2, name: 'total_amount' })
    totalAmount: number;

    @Column({ type: 'text', name: 'shipping_address', nullable: true })
    shippingAddress: string | null;

    @OneToMany(() => OrderItem, (item) => item.order)
    orderItems: Relation<OrderItem[]>;

    @OneToOne(() => Payment, (payment) => payment.order)
    payment: Relation<Payment>;

    @OneToOne(() => Shipment, (shipment) => shipment.order)
    shipment: Relation<Shipment>;

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date;
}