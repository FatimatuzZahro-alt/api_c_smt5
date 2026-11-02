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
import { Customer } from '../../customers/entities/customers-entity.js';

@Entity('customer_addresses')
export class CustomerAddress {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'uuid', name: 'customer_id' })
    customerId: string;

    @ManyToOne(() => Customer, (customer) => customer.addresses, {
        onDelete: 'CASCADE',
    })
    @JoinColumn({ name: 'customer_id' })
    customer: Relation<Customer>;

    @Column({ type: 'varchar', length: 150, name: 'recipient_name' })
    recipientName: string;

    @Column({ type: 'varchar', length: 20 })
    phone: string;

    @Column({ type: 'text' })
    address: string;

    @Column({ type: 'varchar', length: 100 })
    city: string;

    @Column({ type: 'varchar', length: 10, name: 'postal_code' })
    postalCode: string;

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date;
}