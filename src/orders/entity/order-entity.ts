import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    JoinColumn,
    CreateDateColumn,
    UpdateDateColumn,
    DeleteDateColumn,
    OneToMany,
} from 'typeorm';
import { Customer } from '../../customers/entities/customers-entity.js';
import { OrderStatus } from '../dto/create-order.js';
import { OrderItem } from '../../order_items/entity/order-item-entity.js';
import { Payment } from '../../payments/entity/payment-entity.js';
import { Shipment } from '../../shipment/entity/shipment-entity.js';
import type { Relation } from 'typeorm';

@Entity('orders')
export class Order {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'int', name: 'customer_id' })
    customerId: number;

    @ManyToOne(() => Customer, (customer) => customer.orders, {
        onDelete: 'RESTRICT',
    })
    @JoinColumn({ name: 'customer_id' })
    customer: Relation<Customer>;

    @Column({ type: 'decimal', precision: 12, scale: 2, name: 'total_amount' })
    totalAmount: number;

    @Column({ type: 'enum', enum: OrderStatus, default: OrderStatus.PENDING })
    status: OrderStatus;

    @Column({ type: 'text', name: 'shipping_address' })
    shippingAddress: string;

    @Column({ type: 'text', nullable: true })
    notes?: string;

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date;

    @DeleteDateColumn({ name: 'deleted_at', nullable: true })
    deletedAt: Date;

    @OneToMany(() => OrderItem, (item) => item.order)
    orderItem: Relation<OrderItem[]>;

    @OneToMany(() => Payment, (payment) => payment.order)
    payments: Relation<Payment[]>;

    @OneToMany(() => Shipment, (shipment) => shipment.order)
    shipments: Relation<Shipment[]>;
}