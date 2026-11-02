import { IsNotEmpty, IsEmail, IsOptional, IsString, IsDateString, MaxLength } from 'class-validator';

export class CreateAuthorDto {
    @IsNotEmpty({ message: 'Nama penulis harus diisi' })
    @IsString({ message: 'Nama penulis harus berupa teks' })
    @MaxLength(128, { message: 'Nama penulis maksimal 128 karakter' })
    readonly name: string;

    @IsOptional()
    @IsEmail({}, { message: 'Format email tidak valid' })
    readonly email?: string;

    @IsOptional()
    @IsString({ message: 'Kewarganegaraan harus berupa teks' })
    readonly nationality?: string;

    @IsOptional()
    @IsDateString({}, { message: 'Format tanggal lahir tidak valid (contoh: 1990-05-20)' })
    readonly birthDate?: string;

    @IsOptional()
    @IsString({ message: 'Biografi harus berupa teks' })
    readonly bio?: string;
}