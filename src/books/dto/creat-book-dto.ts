import { IsInt, IsNotEmpty } from "class-validator";

export class CreateBookDto{
    @IsNotEmpty({message: 'Nama harus diisi'})
    readonly name: string;

    @IsNotEmpty({message: 'Author harus diisi'})
    readonly author: string;

    @IsNotEmpty({message: 'ISBN harus diisi'})
    readonly isbn: string;

    @IsNotEmpty({message: 'Published Year harus diisi'})
    @IsInt({message: 'Published Year harus berupa angka'})
    readonly publishedYear: number;

}