import { IsNotEmpty, IsUUID } from 'class-validator';

export class CreateBookAuthorDto {
    @IsNotEmpty({ message: 'ID buku harus diisi' })
    @IsUUID('4', { message: 'ID buku tidak valid' })
    readonly bookId: string;

    @IsNotEmpty({ message: 'ID penulis harus diisi' })
    @IsUUID('4', { message: 'ID penulis tidak valid' })
    readonly authorId: string;
}