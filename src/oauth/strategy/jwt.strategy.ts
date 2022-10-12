import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { LoginCompleteTokenDto } from '../Dto/logincompleteToken.dto';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromUrlQueryParameter('loginCompleteToken'),
    });
  }

  async validate(
    payload: LoginCompleteTokenDto,
  ): Promise<LoginCompleteTokenDto> {
    return payload;
  }
}
