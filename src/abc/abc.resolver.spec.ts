import { Test, TestingModule } from '@nestjs/testing';
import { AbcResolver } from './abc.resolver';
import { AbcService } from './abc.service';

describe('AbcResolver', () => {
  let resolver: AbcResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AbcResolver, AbcService],
    }).compile();

    resolver = module.get<AbcResolver>(AbcResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
