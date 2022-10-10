import { Body, Controller, Delete, Param, Post, Put } from '@nestjs/common';
import { privileges } from 'src/types/privileges.type';
import { RegisterServerDto } from './Dto/regiser_server.dto';
import { RegisterServerService } from './register_server.service';

@Controller('register-server')
export class RegisterServerController {
  constructor(private readonly registerServerService: RegisterServerService) {}

  @Post('')
  async register(@Body() serverData: RegisterServerDto): Promise<string> {
    return this.registerServerService.regiser(serverData);
  }

  @Put(':id')
  async updateServerInfo(
    @Param('id') Id: number,
    @Body() privileges: privileges,
  ): Promise<void> {
    return this.registerServerService.updateServerInfo(Id, privileges);
  }

  @Delete(':id')
  async deleteServer(@Param('id') Id: number): Promise<void> {
    return this.registerServerService.deleteServer(Id);
  }
}
