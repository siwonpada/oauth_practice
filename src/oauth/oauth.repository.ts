import { Injectable } from '@nestjs/common';
import { BackendServer } from 'src/entity/server.entity';
import { User } from 'src/entity/user.entity';
import { DataSource, EntityManager } from 'typeorm';
import { SignUpDataDto } from './Dto/signUpData.dto';
import { userDataDto } from './Dto/userData.dto';

@Injectable()
export class OauthRepository {
  constructor(private readonly dataSource: DataSource) {}

  async findOneById(Id: number): Promise<User> {
    return this.dataSource.manager.findOneBy(User, { id: Id });
  }

  async findOneByUsername(username: string): Promise<User> {
    return this.dataSource.manager.findOneBy(User, { username: username });
  }

  async getUserData(userId, serverId) {
    const user = await this.dataSource.manager.findOneBy(User, { id: userId });
    const server = await this.dataSource.manager.findOneBy(BackendServer, {
      id: serverId,
    });
    const userData: userDataDto = { id: user.id, username: user.username };
    if (server.privileges.email) {
      userData.email = user.email;
    }
    if (server.privileges.gender) {
      userData.gender = user.gender;
    }
    if (server.privileges.phoneNumber) {
      userData.phoneNumber = user.phoneNumber;
    }
    return userData;
  }

  async createUser(UserData: SignUpDataDto): Promise<void> {
    this.dataSource.transaction(
      async (manager: EntityManager): Promise<void> => {
        const UserToCreate = new User();
        UserToCreate.username = UserData.username;
        UserToCreate.password = UserData.password;
        UserToCreate.gender = UserData.gender;
        UserToCreate.email = UserData.email;
        UserToCreate.phoneNumber = UserData.phoneNumber;
        manager.save(UserToCreate);
      },
    );
  }
}
