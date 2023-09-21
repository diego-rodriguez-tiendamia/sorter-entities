import { Test, TestingModule } from '@nestjs/testing';
import { SorterController } from './sorter.controller';
import { SorterService } from './sorter.service';

describe('SorterController', () => {
  let controller: SorterController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SorterController],
      providers: [SorterService],
    }).compile();

    controller = module.get<SorterController>(SorterController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
