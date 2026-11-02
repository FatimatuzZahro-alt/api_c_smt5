import { IsNotEmpty, IsEmail, IsOptional, Matches } from 'class-validator';

export class CreateCustomerDto {
    @IsNotEmpty({ message: 'Nama harus diisi' })
    readonly name: string;

    @IsNotEmpty({ message: 'Email harus diisi' })
    @IsEmail({}, { message: 'Format email tidak valid' })
    readonly email: string;

    @IsNotEmpty({ message: 'Nomor telepon harus diisi' })
    @Matches(/^[0-9+]{10,15}$/, { message: 'Nomor telepon tidak valid' })
    readonly phone: string;

    @IsNotEmpty({ message: 'Alamat harus diisi' })
    readonly address: string;

    @IsOptional()
    readonly city?: string;
}