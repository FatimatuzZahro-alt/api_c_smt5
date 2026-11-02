import { IsNotEmpty, IsUUID, IsString, IsNumber, IsOptional, MaxLength, Min } from 'class-validator';

export class CreateOrderDto {
    @IsNotEmpty({ message: 'ID pelanggan harus diisi' })
    @IsUUID('4', { message: 'ID pelanggan tidak valid' })
    readonly customerId: string;

    @IsNotEmpty({ message: 'Nomor pesanan harus diisi' })
    @IsString({ message: 'Nomor pesanan harus berupa teks' })
    @MaxLength(50, { message: 'Nomor pesanan maksimal 50 karakter' })
    readonly orderNumber: string;

    @IsOptional()
    @IsString({ message: 'Status harus berupa teks' })
    @MaxLength(30, { message: 'Status maksimal 30 karakter' })
    readonly status?: string;

    @IsNotEmpty({ message: 'Total harus diisi' })
    @IsNumber({}, { message: 'Total harus berupa angka' })
    @Min(0, { message: 'Total tidak boleh negatif' })
    readonly totalAmount: number;

    @IsOptional()
    @IsString({ message: 'Alamat pengiriman harus berupa teks' })
    readonly shippingAddress?: string;
}