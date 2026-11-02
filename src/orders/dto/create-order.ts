import { IsNotEmpty, IsNumber, IsOptional, IsString, IsEnum, Min } from 'class-validator';

export enum OrderStatus {
    PENDING = 'pending',
    PAID = 'paid',
    SHIPPED = 'shipped',
    COMPLETED = 'completed',
    CANCELLED = 'cancelled',
}

export class CreateOrderDto {
    @IsNotEmpty({ message: 'ID pelanggan harus diisi' })
    @IsNumber({}, { message: 'ID pelanggan harus berupa angka' })
    readonly customerId: number;

    @IsNotEmpty({ message: 'Total harga harus diisi' })
    @IsNumber({}, { message: 'Total harga harus berupa angka' })
    @Min(0, { message: 'Total harga tidak boleh negatif' })
    readonly totalAmount: number;

    @IsOptional()
    @IsEnum(OrderStatus, { message: 'Status pesanan tidak valid' })
    readonly status?: OrderStatus;

    @IsNotEmpty({ message: 'Alamat pengiriman harus diisi' })
    @IsString({ message: 'Alamat pengiriman harus berupa teks' })
    readonly shippingAddress: string;

    @IsOptional()
    @IsString({ message: 'Catatan harus berupa teks' })
    readonly notes?: string;
}