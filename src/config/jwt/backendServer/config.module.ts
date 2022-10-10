import { Module } from '@nestjs/common';
import { ServerJwtConfigService } from './config.service';

@Module({
  providers: [ServerJwtConfigService],
})
export class ServerJwtConfigModule {}
