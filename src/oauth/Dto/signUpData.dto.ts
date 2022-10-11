import { IsEmail, IsNumber, IsString } from 'class-validator';

export class SignUpDataDto {
  @IsString()
  username: string;

  @IsString()
  password: string;

  @IsString()
  gender: string;

  @IsEmail()
  email: string;

  @IsNumber()
  phoneNumber: number;
}
