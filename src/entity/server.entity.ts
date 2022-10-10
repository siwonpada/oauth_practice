import { privileges } from 'src/types/privileges.type';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { LoginInfo } from './loginInfo.entity';

@Entity()
export class BackendServer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  serverName: string;

  @Column()
  privileges: privileges;

  @OneToMany(() => LoginInfo, (loginInfo) => loginInfo.backendServer)
  loginInfo: string;
}
