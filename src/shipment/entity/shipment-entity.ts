import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    JoinColumn,
    CreateDateColumn,
    UpdateDateColumn,
} from 'typeorm';
import { Order } from '../../orders/entity/order-entity.js';
import { ShipmentStatus } from '../dto/create-shipment.js';
import type { Relation } from 'typeorm';

@Entity('shipments')
export class Shipment {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'uuid', name: 'order_id' })
    orderId: string;

    @ManyToOne(() => Order, (order) => order.shipments, { onDelete: 'RESTRICT' })
    @JoinColumn({ name: 'order_id' })
    order: Relation<Order>;

    @Column({ type: 'varchar', length: 100 })
    courier: string;

    @Column({ type: 'varchar', name: 'tracking_number', nullable: true, unique: true })
    trackingNumber?: string;

    @Column({ type: 'decimal', precision: 12, scale: 2, name: 'shipping_cost' })
    shippingCost: number;

    @Column({ type: 'enum', enum: ShipmentStatus, default: ShipmentStatus.PENDING })
    status: ShipmentStatus;

    @Column({ type: 'date', name: 'estimated_arrival', nullable: true })
    estimatedArrival?: Date;

    @Column({ type: 'timestamp', name: 'shipped_at', nullable: true })
    shippedAt?: Date;

    @Column({ type: 'timestamp', name: 'delivered_at', nullable: true })
    deliveredAt?: Date;

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date;
}