import { IsEmail, IsNumber, IsString } from 'class-validator';

export class userDataDto {
  @IsNumber()
  id: number;

  @IsString()
  username: string;

  @IsString()
  gender?: string;

  @IsEmail()
  email?: string;

  @IsNumber()
  phoneNumber?: number;
}
