import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { LoginInfo } from './loginInfo.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  gender: string;

  @Column()
  email: string;

  @Column()
  phoneNumber: number;

  @OneToMany(() => LoginInfo, (loginInfo) => loginInfo.user)
  loginInfo: LoginInfo[];
}
