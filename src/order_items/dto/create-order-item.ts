import { IsNotEmpty, IsUUID, IsInt, IsNumber, Min } from 'class-validator';

export class CreateOrderDetailDto {
    @IsNotEmpty({ message: 'ID pesanan harus diisi' })
    @IsUUID('4', { message: 'ID pesanan tidak valid' })
    readonly orderId: string;

    @IsNotEmpty({ message: 'ID buku harus diisi' })
    @IsUUID('4', { message: 'ID buku tidak valid' })
    readonly bookId: string;

    @IsNotEmpty({ message: 'Jumlah harus diisi' })
    @IsInt({ message: 'Jumlah harus berupa bilangan bulat' })
    @Min(1, { message: 'Jumlah minimal 1' })
    readonly quantity: number;

    @IsNotEmpty({ message: 'Harga harus diisi' })
    @IsNumber({}, { message: 'Harga harus berupa angka' })
    @Min(0, { message: 'Harga tidak boleh negatif' })
    readonly price: number;
}