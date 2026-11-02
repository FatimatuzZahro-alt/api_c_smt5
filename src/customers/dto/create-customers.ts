import { IsNotEmpty, IsEmail, IsString, MaxLength, Matches } from 'class-validator';

export class CreateCustomerDto {
    @IsNotEmpty({ message: 'Nama harus diisi' })
    @IsString({ message: 'Nama harus berupa teks' })
    @MaxLength(150, { message: 'Nama maksimal 150 karakter' })
    readonly name: string;

    @IsNotEmpty({ message: 'Email harus diisi' })
    @IsEmail({}, { message: 'Format email tidak valid' })
    @MaxLength(150, { message: 'Email maksimal 150 karakter' })
    readonly email: string;

    @IsNotEmpty({ message: 'Nomor telepon harus diisi' })
    @Matches(/^[0-9+]{10,20}$/, { message: 'Nomor telepon tidak valid' })
    readonly phone: string;
}