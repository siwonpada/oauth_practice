import { Injectable } from '@nestjs/common';
import { User } from 'src/entity/user.entity';
import { DataSource, EntityManager } from 'typeorm';
import { SignUpDataDto } from './Dto/signUpData.dto';

@Injectable()
export class OauthRepository {
  constructor(private readonly dataSource: DataSource) {}

  async findOneById(Id: number): Promise<User> {
    return this.dataSource.manager.findOneBy(User, { id: Id });
  }

  async findOneByUsername(username: string): Promise<User> {
    return this.dataSource.manager.findOneBy(User, { username: username });
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
