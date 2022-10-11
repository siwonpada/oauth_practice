import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ServerJwtConfigService } from './config.service';

@Module({
  imports: [ConfigModule],
  providers: [ServerJwtConfigService],
})
export class ServerJwtConfigModule {}
