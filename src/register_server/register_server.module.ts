import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { ServerJwtConfigModule } from 'src/config/jwt/backendServer/config.module';
import { ServerJwtConfigService } from 'src/config/jwt/backendServer/config.service';
import { RegisterServerController } from './register_server.controller';
import { RegisterServerRepository } from './register_server.repository';
import { RegisterServerService } from './register_server.service';

@Module({
  imports: [
    JwtModule.registerAsync({
      imports: [ServerJwtConfigModule],
      useClass: ServerJwtConfigService,
      inject: [ServerJwtConfigService],
    }),
  ],
  controllers: [RegisterServerController],
  providers: [RegisterServerService, RegisterServerRepository],
})
export class RegisterServerModule {}
