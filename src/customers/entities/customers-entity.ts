import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import { CustomerAddress } from '../../customer-addresses/entity/cust_address_entity.js';
import { Order } from '../../orders/entity/order-entity.js';
import type { Relation } from 'typeorm';

@Entity('customers')
export class Customer {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({ unique: true })
    email: string;

    @Column()
    phone: string;

    @Column()
    address: string;

    @Column({ nullable: true })
    city?: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @OneToMany(() => CustomerAddress, (address) => address.customer)
    addresses: Relation<CustomerAddress[]>;

    @OneToMany(() => Order, (order) => order.customer)
    orders: Relation<Order[]>;
}