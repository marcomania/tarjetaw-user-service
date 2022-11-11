import {
    IsArray, IsIn, IsInt, IsNumber, IsOptional,
    IsPositive, IsString, MinLength, IsNotEmpty, MaxLength
} from 'class-validator';


export class CreateUserDto {
    @IsNotEmpty()
    @IsString()
    @MinLength(3)
    @MaxLength(50)
    name: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(3)
    @MaxLength(50)
    lastName: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(3)
    @MaxLength(50)
    email: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(3)
    @MaxLength(50)
    password: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(3)
    @MaxLength(50)
    typeDocument: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(3)
    @MaxLength(50)
    numberDocument: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(3)
    @MaxLength(50)
    phone: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(3)
    @MaxLength(50)
    address: string;
}
