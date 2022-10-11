import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-jwt';
import { ValidateUserDto } from '../Dto/validateUser.dto';
import { OauthService } from '../oauth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly oauthService: OauthService) {
    super();
  }

  async validate(username: string, password: string): Promise<ValidateUserDto> {
    const user = await this.oauthService.validateUser(username, password);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
