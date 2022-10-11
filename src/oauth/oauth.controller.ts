import { Body, Controller, Post, Query, Req, UseGuards } from '@nestjs/common';
import { SignUpDataDto } from './Dto/signUpData.dto';
import { LocalGuard } from './guard/local.guard';
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

  @Post('sign_up')
  async signUp(@Body() signUpData: SignUpDataDto): Promise<void> {
    return this.oauthService.signUp(signUpData);
  }
}
