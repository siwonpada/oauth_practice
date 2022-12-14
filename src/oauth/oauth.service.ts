import { Injectable, UnauthorizedException } from '@nestjs/common';
import { SignUpDataDto } from './Dto/signUpData.dto';
import { OauthRepository } from './oauth.repository';
import * as bcrypt from 'bcrypt';
import { ValidateUserDto } from './Dto/validateUser.dto';
import { RegisterServerService } from 'src/register_server/register_server.service';
import { JwtService } from '@nestjs/jwt';
import { LoginCompleteTokenDto } from './Dto/logincompleteToken.dto';

@Injectable()
export class OauthService {
  constructor(
    private readonly oauthRepository: OauthRepository,
    private readonly jwtService: JwtService,
    private readonly registerServerService: RegisterServerService,
  ) {}

  async login(userInfo: ValidateUserDto, serverToken: string): Promise<string> {
    const serverData = await this.registerServerService.validateJwt(
      serverToken,
    );
    const payload = { ...userInfo, ...serverData };
    return this.jwtService.sign(payload);
  }

  async signUp(signUpData: SignUpDataDto): Promise<void> {
    signUpData.password = await bcrypt.hash(signUpData.password, 10);
    return this.oauthRepository.createUser(signUpData);
  }

  async getUserToken(
    loginData: LoginCompleteTokenDto,
    serverToken: string,
  ): Promise<string> {
    const serverData = await this.registerServerService.validateJwt(
      serverToken,
    );
    if (loginData.serverId === serverData.serverId) {
      const userData = this.oauthRepository.getUserData(
        loginData.id,
        loginData.serverId,
      );
      return this.jwtService.sign(userData);
    }
    throw UnauthorizedException;
  }

  async validateUser(
    username: string,
    password: string,
  ): Promise<null | ValidateUserDto> {
    const user = await this.oauthRepository.findOneByUsername(username);
    if (bcrypt.compare(password, user.password)) {
      const result = { id: user.id, username: user.username };
      return result;
    }
    return null;
  }
}
