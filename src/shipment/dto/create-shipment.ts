import {
    IsNotEmpty,
    IsUUID,
    IsOptional,
    IsString,
    IsEnum,
    IsDateString,
    MaxLength,
} from 'class-validator';

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
    @MaxLength(100, { message: 'Nama kurir maksimal 100 karakter' })
    readonly courier: string;

    @IsOptional()
    @IsString({ message: 'Nomor resi harus berupa teks' })
    @MaxLength(100, { message: 'Nomor resi maksimal 100 karakter' })
    readonly trackingNumber?: string;

    @IsOptional()
    @IsEnum(ShipmentStatus, { message: 'Status pengiriman tidak valid' })
    readonly status?: ShipmentStatus;

    @IsOptional()
    @IsDateString({}, { message: 'Waktu pengiriman tidak valid' })
    readonly shippedAt?: string;

    @IsOptional()
    @IsDateString({}, { message: 'Waktu diterima tidak valid' })
    readonly deliveredAt?: string;
}