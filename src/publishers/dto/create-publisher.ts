import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreatePublisherDto {
    @IsNotEmpty({ message: 'Nama penerbit harus diisi' })
    @IsString({ message: 'Nama penerbit harus berupa teks' })
    @MaxLength(150, { message: 'Nama penerbit maksimal 150 karakter' })
    readonly name: string;
}