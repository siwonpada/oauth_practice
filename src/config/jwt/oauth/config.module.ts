import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { OauthJwtConfigService } from './config.service';

@Module({
  imports: [ConfigModule],
  providers: [OauthJwtConfigService],
})
export class OauthJwtConfigModule {}
