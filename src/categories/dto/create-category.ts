import { IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator';

export class CreateCategoryDto {
    @IsNotEmpty({ message: 'Nama kategori harus diisi' })
    @IsString({ message: 'Nama kategori harus berupa teks' })
    @MaxLength(100, { message: 'Nama kategori maksimal 100 karakter' })
    readonly name: string;

    @IsOptional()
    @IsString({ message: 'Deskripsi harus berupa teks' })
    readonly description?: string;
}