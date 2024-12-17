import { Test, TestingModule } from '@nestjs/testing';
import { ModUnoService } from './mod-uno.service';

describe('ModUnoService', () => {
  let service: ModUnoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ModUnoService],
    }).compile();

    service = module.get<ModUnoService>(ModUnoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
