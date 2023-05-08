import { Test, TestingModule } from '@nestjs/testing';
import { CommandeController } from './commande.controller';
import { CommandeService } from './commande.service';

describe('CommandeController', () => {
  let controller: CommandeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CommandeController],
      providers: [CommandeService],
    }).compile();

    controller = module.get<CommandeController>(CommandeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
