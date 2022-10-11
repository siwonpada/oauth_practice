import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { OauthJwtConfigModule } from 'src/config/jwt/oauth/config.module';
import { OauthJwtConfigService } from 'src/config/jwt/oauth/config.service';
import { RegisterServerModule } from 'src/register_server/register_server.module';
import { OauthController } from './oauth.controller';
import { OauthService } from './oauth.service';

@Module({
  imports: [
    RegisterServerModule,
    JwtModule.registerAsync({
      imports: [OauthJwtConfigModule],
      useClass: OauthJwtConfigService,
      inject: [OauthJwtConfigService],
    }),
  ],
  controllers: [OauthController],
  providers: [OauthService],
})
export class OauthModule {}
