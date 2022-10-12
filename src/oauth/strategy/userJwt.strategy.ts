import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { userDataDto } from '../Dto/userData.dto';

@Injectable()
export class UserJwtStrategy extends PassportStrategy(Strategy, 'userJwt') {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromUrlQueryParameter('UserToken'),
    });
  }

  async validate(payload: userDataDto): Promise<userDataDto> {
    return payload;
  }
}
