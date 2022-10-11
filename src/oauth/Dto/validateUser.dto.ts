import { IsNumber, IsString } from 'class-validator';

export class ValidateUserDto {
  @IsNumber()
  id: number;

  @IsString()
  username: string;
}
