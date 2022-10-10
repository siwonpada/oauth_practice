import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { privileges } from 'src/types/privileges.type';
import { serverPayload } from 'src/types/serverPayload.type';
import { RegisterServerDto } from './Dto/regiser_server.dto';
import { RegisterServerRepository } from './register_server.repository';

@Injectable()
export class RegisterServerService {
  constructor(
    private readonly registerServerRepository: RegisterServerRepository,
    private readonly jwtService: JwtService,
  ) {}

  async regiser(serverData: RegisterServerDto): Promise<string> {
    await this.registerServerRepository.createBackendServer(serverData);
    return this.getJwt(serverData.serverName);
  }

  async updateServerInfo(Id: number, privileges: privileges): Promise<void> {
    this.registerServerRepository.updateBackendServer(Id, privileges);
  }

  async deleteServer(Id: number): Promise<void> {
    this.registerServerRepository.deleteBackendServer(Id);
  }

  async getJwt(serverName: string): Promise<string> {
    const serverId = (
      await this.registerServerRepository.findOnebyServerName(serverName)
    ).id;
    const payload: serverPayload = {
      serverId: serverId,
      serverName: serverName,
    };
    return this.jwtService.sign(payload);
  }
}
