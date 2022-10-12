import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { OauthJwtConfigModule } from 'src/config/jwt/oauth/config.module';
import { OauthJwtConfigService } from 'src/config/jwt/oauth/config.service';
import { RegisterServerModule } from 'src/register_server/register_server.module';
import { JwtGuard } from './guard/jwt.guard';
import { LocalGuard } from './guard/local.guard';
import { UserJwtGuard } from './guard/userJwt.guard';
import { OauthController } from './oauth.controller';
import { OauthService } from './oauth.service';
import { JwtStrategy } from './strategy/jwt.strategy';
import { LocalStrategy } from './strategy/local.strategy';
import { UserJwtStrategy } from './strategy/userJwt.strategy';

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
  providers: [
    OauthService,
    LocalGuard,
    JwtGuard,
    LocalStrategy,
    JwtStrategy,
    UserJwtGuard,
    UserJwtStrategy,
  ],
})
export class OauthModule {}
