import { Module } from '@nestjs/common';
import { RegisterServerController } from './register_server.controller';
import { RegisterServerService } from './register_server.service';

@Module({
  controllers: [RegisterServerController],
  providers: [RegisterServerService],
})
export class RegisterServerModule {}
