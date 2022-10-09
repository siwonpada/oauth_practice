import { privileges } from 'src/types/privileges.type';
import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';
import { LoginInfo } from './loginInfo.entity';

@Entity()
export class BackendServer {
  @PrimaryColumn()
  id: number;

  @Column()
  serverName: string;

  @Column()
  privileges: privileges;

  @OneToMany(() => LoginInfo, (loginInfo) => loginInfo.backendServer)
  loginInfo: string;
}
