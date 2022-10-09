import { Controller } from '@nestjs/common';
import { RegisterServerService } from './register_server.service';

@Controller('register-server')
export class RegisterServerController {
  constructor(private readonly registerServerService: RegisterServerService) {}
}
