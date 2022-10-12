import { Body, Controller, Post, Query, Req, UseGuards } from '@nestjs/common';
import { SignUpDataDto } from './Dto/signUpData.dto';
import { userDataDto } from './Dto/userData.dto';
import { JwtGuard } from './guard/jwt.guard';
import { LocalGuard } from './guard/local.guard';
import { UserJwtGuard } from './guard/userJwt.guard';
import { OauthService } from './oauth.service';

@Controller('oauth')
export class OauthController {
  constructor(private readonly oauthService: OauthService) {}

  @UseGuards(LocalGuard)
  @Post('login')
  async login(
    @Req() req,
    @Query('serverToken') serverToken: string,
  ): Promise<string> {
    return this.oauthService.login(req.user, serverToken);
  }

  @UseGuards(JwtGuard)
  @Post('getToken')
  async getToken(@Req() req, @Query() serverToken: string): Promise<string> {
    return this.oauthService.getUserToken(req.user, serverToken);
  }

  @Post('sign_up')
  async signUp(@Body() signUpData: SignUpDataDto): Promise<void> {
    return this.oauthService.signUp(signUpData);
  }

  @UseGuards(UserJwtGuard)
  @Post('getUserData')
  async getUserData(@Req() req): Promise<userDataDto> {
    return req.user;
  }
}
