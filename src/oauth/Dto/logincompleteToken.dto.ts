import { IsNumber, IsString } from 'class-validator';

export class LoginCompleteTokenDto {
  @IsString()
  serverName: string;

  @IsNumber()
  serverId: number;

  @IsString()
  username: string;

  @IsNumber()
  id: number;
}
