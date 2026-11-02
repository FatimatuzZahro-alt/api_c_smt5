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
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    customerId: number;

    @ManyToOne(() => Customer, (customer) => customer.addresses, {
        onDelete: 'CASCADE',
    })
    @JoinColumn({ name: 'customerId' })
    customer: Relation<Customer>;

    @Column()
    label: string;

    @Column()
    recipientName: string;

    @Column()
    phone: string;

    @Column({ type: 'text' })
    address: string;

    @Column()
    city: string;

    @Column()
    province: string;

    @Column({ length: 5 })
    postalCode: string;

    @Column({ default: false })
    isDefault: boolean;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}