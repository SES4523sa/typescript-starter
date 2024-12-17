import { Test, TestingModule } from '@nestjs/testing';
import { ModUnoController } from './mod-uno.controller';
import { ModUnoService } from './mod-uno.service';

describe('ModUnoController', () => {
  let controller: ModUnoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ModUnoController],
      providers: [ModUnoService],
    }).compile();

    controller = module.get<ModUnoController>(ModUnoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
