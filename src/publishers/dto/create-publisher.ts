import { IsNotEmpty, IsEmail, IsOptional, IsString, MaxLength, Matches } from 'class-validator';

export class CreatePublisherDto {
    @IsNotEmpty({ message: 'Nama penerbit harus diisi' })
    @IsString({ message: 'Nama penerbit harus berupa teks' })
    @MaxLength(100, { message: 'Nama penerbit maksimal 100 karakter' })
    readonly name: string;

    @IsNotEmpty({ message: 'Alamat harus diisi' })
    readonly address: string;

    @IsNotEmpty({ message: 'Kota harus diisi' })
    readonly city: string;

    @IsNotEmpty({ message: 'Nomor telepon harus diisi' })
    @Matches(/^[0-9+]{10,15}$/, { message: 'Nomor telepon tidak valid' })
    readonly phone: string;

    @IsNotEmpty({ message: 'Email harus diisi' })
    @IsEmail({}, { message: 'Format email tidak valid' })
    readonly email: string;

    @IsOptional()
    @IsString({ message: 'Website harus berupa teks' })
    readonly website?: string;
}