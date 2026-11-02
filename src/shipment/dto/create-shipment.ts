import { IsNotEmpty, IsUUID, IsNumber, IsOptional, IsString, IsEnum, IsDateString, Min } from 'class-validator';

export enum ShipmentStatus {
    PENDING = 'pending',
    PROCESSING = 'processing',
    SHIPPED = 'shipped',
    DELIVERED = 'delivered',
    RETURNED = 'returned',
}

export class CreateShipmentDto {
    @IsNotEmpty({ message: 'ID pesanan harus diisi' })
    @IsUUID('4', { message: 'ID pesanan tidak valid' })
    readonly orderId: string;

    @IsNotEmpty({ message: 'Nama kurir harus diisi' })
    @IsString({ message: 'Nama kurir harus berupa teks' })
    readonly courier: string;

    @IsOptional()
    @IsString({ message: 'Nomor resi harus berupa teks' })
    readonly trackingNumber?: string;

    @IsNotEmpty({ message: 'Biaya pengiriman harus diisi' })
    @IsNumber({}, { message: 'Biaya pengiriman harus berupa angka' })
    @Min(0, { message: 'Biaya pengiriman tidak boleh negatif' })
    readonly shippingCost: number;

    @IsOptional()
    @IsEnum(ShipmentStatus, { message: 'Status pengiriman tidak valid' })
    readonly status?: ShipmentStatus;

    @IsOptional()
    @IsDateString({}, { message: 'Format estimasi tiba tidak valid (contoh: 2026-11-10)' })
    readonly estimatedArrival?: string;
}