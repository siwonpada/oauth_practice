import { IsObject, IsString } from 'class-validator';
import { privileges } from 'src/types/privileges.type';

export class RegisterServerDto {
  @IsString()
  serverName: string;

  @IsObject()
  privileges: privileges;
}
