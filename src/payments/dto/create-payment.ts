import { IsNotEmpty, IsUUID, IsNumber, IsOptional, IsEnum, IsDateString, Min } from 'class-validator';

export enum PaymentMethod {
    BANK_TRANSFER = 'bank_transfer',
    CREDIT_CARD = 'credit_card',
    E_WALLET = 'e_wallet',
    COD = 'cod',
}

export enum PaymentStatus {
    PENDING = 'pending',
    SUCCESS = 'success',
    FAILED = 'failed',
    REFUNDED = 'refunded',
}

export class CreatePaymentDto {
    @IsNotEmpty({ message: 'ID pesanan harus diisi' })
    @IsUUID('4', { message: 'ID pesanan tidak valid' })
    readonly orderId: string;

    @IsNotEmpty({ message: 'Metode pembayaran harus diisi' })
    @IsEnum(PaymentMethod, { message: 'Metode pembayaran tidak valid' })
    readonly paymentMethod: PaymentMethod;

    @IsNotEmpty({ message: 'Jumlah pembayaran harus diisi' })
    @IsNumber({}, { message: 'Jumlah pembayaran harus berupa angka' })
    @Min(0, { message: 'Jumlah pembayaran tidak boleh negatif' })
    readonly amount: number;

    @IsOptional()
    @IsEnum(PaymentStatus, { message: 'Status pembayaran tidak valid' })
    readonly status?: PaymentStatus;

    @IsOptional()
    @IsDateString({}, { message: 'Waktu pembayaran tidak valid' })
    readonly paidAt?: string;
}