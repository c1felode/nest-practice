import { IsString, MinLength, IsEmail } from "class-validator";

export class CreateUserDto {
    @IsString({ message: 'Name field should be type of string' })
    @MinLength(3, {message:'Name filed should be atleast 3 characters long'})
    name!: string;
    @MinLength(5, {message:'Email filed should be atleast 5 characters long'})
    @IsString({message: 'Email field should be type of string'})
    @IsEmail()
    email!: string;
}