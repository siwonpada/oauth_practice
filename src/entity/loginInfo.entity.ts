import { Column, Entity, ManyToOne } from 'typeorm';
import { BackendServer } from './server.entity';
import { User } from './user.entity';

@Entity()
export class LoginInfo {
  @ManyToOne(() => User, (user) => user.loginInfo)
  user: User;

  @ManyToOne(() => BackendServer, (backendServer) => backendServer.loginInfo)
  backendServer: BackendServer;

  @Column()
  refreshToken: string;

  @Column()
  isLogin: boolean;
}
