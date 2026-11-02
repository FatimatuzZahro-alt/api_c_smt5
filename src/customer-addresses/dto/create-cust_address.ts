import { IsNotEmpty, IsOptional, IsNumber, IsBoolean, Matches } from 'class-validator';

export class CreateCustomerAddressDto {
    @IsNotEmpty({ message: 'ID pelanggan harus diisi' })
    @IsNumber({}, { message: 'ID pelanggan harus berupa angka' })
    readonly customerId: number;

    @IsNotEmpty({ message: 'Label alamat harus diisi' })
    readonly label: string;

    @IsNotEmpty({ message: 'Nama penerima harus diisi' })
    readonly recipientName: string;

    @IsNotEmpty({ message: 'Nomor telepon penerima harus diisi' })
    @Matches(/^[0-9+]{10,15}$/, { message: 'Nomor telepon tidak valid' })
    readonly phone: string;

    @IsNotEmpty({ message: 'Alamat lengkap harus diisi' })
    readonly address: string;

    @IsNotEmpty({ message: 'Kota harus diisi' })
    readonly city: string;

    @IsNotEmpty({ message: 'Provinsi harus diisi' })
    readonly province: string;

    @IsNotEmpty({ message: 'Kode pos harus diisi' })
    @Matches(/^[0-9]{5}$/, { message: 'Kode pos harus 5 digit angka' })
    readonly postalCode: string;

    @IsOptional()
    @IsBoolean({ message: 'isDefault harus berupa true atau false' })
    readonly isDefault?: boolean;
}