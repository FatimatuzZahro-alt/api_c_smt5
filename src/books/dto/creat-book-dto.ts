import {
    IsNotEmpty,
    IsInt,
    IsString,
    IsNumber,
    IsBoolean,
    IsOptional,
    IsUUID,
    MaxLength,
    Min,
} from 'class-validator';

export class CreateBookDto {
    @IsNotEmpty({ message: 'Title is required' })
    @IsString({ message: 'Title must be a string' })
    @MaxLength(30, { message: 'Title must be at most 30 characters' })
    readonly title: string;

    @IsNotEmpty({ message: 'ISBN is required' })
    @IsString({ message: 'ISBN must be a string' })
    @MaxLength(45, { message: 'ISBN must be at most 45 characters' })
    readonly isbn: string;

    @IsOptional()
    @IsInt({ message: 'Published year must be an integer' })
    @Min(0, { message: 'Published year cannot be negative' })
    readonly publishedYear?: number;

    @IsOptional()
    @IsBoolean({ message: 'isAvailable must be true or false' })
    readonly isAvailable?: boolean;

    @IsNotEmpty({ message: 'Price is required' })
    @IsNumber({}, { message: 'Price must be a number' })
    @Min(0, { message: 'Price cannot be negative' })
    readonly price: number;

    @IsNotEmpty({ message: 'Stock is required' })
    @IsInt({ message: 'Stock must be an integer' })
    @Min(0, { message: 'Stock cannot be negative' })
    readonly stock: number;

    @IsOptional()
    @IsUUID('4', { message: 'Category ID is not valid' })
    readonly categoryId?: string;

    @IsOptional()
    @IsUUID('4', { message: 'Publisher ID is not valid' })
    readonly publisherId?: string;
}