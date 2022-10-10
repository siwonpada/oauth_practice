import { Injectable } from '@nestjs/common';
import { privileges } from 'src/types/privileges.type';
import { DataSource, EntityManager } from 'typeorm';
import { BackendServer } from '../entity/server.entity';
import { RegisterServerDto } from './Dto/regiser_server.dto';

@Injectable()
export class RegisterServerRepository {
  constructor(private readonly dataSource: DataSource) {}

  async findOnebyId(Id: number): Promise<BackendServer> {
    return this.dataSource.manager.findOneBy(BackendServer, { id: Id });
  }

  async findOnebyServerName(serverName: string): Promise<BackendServer> {
    return this.dataSource.manager.findOneBy(BackendServer, {
      serverName: serverName,
    });
  }

  async createBackendServer(serverData: RegisterServerDto): Promise<void> {
    this.dataSource.transaction(
      async (manager: EntityManager): Promise<void> => {
        const serverToCreate = new BackendServer();
        serverToCreate.serverName = serverData.serverName;
        serverToCreate.privileges = serverData.privileges;
        manager.save(serverToCreate);
      },
    );
  }

  async updateBackendServer(Id: number, privileges: privileges): Promise<void> {
    this.dataSource.transaction(
      async (manager: EntityManager): Promise<void> => {
        const serverToUpdate = await this.findOnebyId(Id);
        serverToUpdate.privileges = privileges;
        manager.save(serverToUpdate);
      },
    );
  }

  async deleteBackendServer(Id: number): Promise<void> {
    this.dataSource.transaction(
      async (manager: EntityManager): Promise<void> => {
        const serverToDelete = await this.findOnebyId(Id);
        manager.remove(serverToDelete);
      },
    );
  }
}
