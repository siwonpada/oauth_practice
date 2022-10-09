import { Test, TestingModule } from '@nestjs/testing';
import { RegisterServerService } from './register_server.service';

describe('RegisterServerService', () => {
  let service: RegisterServerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RegisterServerService],
    }).compile();

    service = module.get<RegisterServerService>(RegisterServerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
