import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToOne,
    JoinColumn,
} from 'typeorm';
import type { Relation } from 'typeorm';
import { Order } from '../../orders/entity/order-entity.js';

@Entity('shipments')
export class Shipment {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'uuid', name: 'order_id', unique: true })
    orderId: string;

    @OneToOne(() => Order, (order) => order.shipment, { onDelete: 'RESTRICT' })
    @JoinColumn({ name: 'order_id' })
    order: Relation<Order>;

    @Column({ type: 'varchar', length: 100 })
    courier: string;

    @Column({ type: 'varchar', length: 100, name: 'tracking_number', nullable: true })
    trackingNumber: string | null;

    @Column({ type: 'varchar', length: 30, default: 'pending' })
    status: string;

    @Column({ type: 'timestamp', name: 'shipped_at', nullable: true })
    shippedAt: Date | null;

    @Column({ type: 'timestamp', name: 'delivered_at', nullable: true })
    deliveredAt: Date | null;
}