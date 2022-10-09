import { Test, TestingModule } from '@nestjs/testing';
import { RegisterServerController } from './register_server.controller';

describe('RegisterServerController', () => {
  let controller: RegisterServerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RegisterServerController],
    }).compile();

    controller = module.get<RegisterServerController>(RegisterServerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
