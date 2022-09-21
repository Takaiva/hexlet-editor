import { IsEmail, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  name: any;

  @IsEmail()
  email: string;

  @IsString()
  password: string;

  @IsString()
  confirmPassword: string;
}
