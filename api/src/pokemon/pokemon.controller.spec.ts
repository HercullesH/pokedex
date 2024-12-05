import { Test, TestingModule } from '@nestjs/testing';
import { PokemonController } from './pokemon.controller';
import { PokemonService } from './pokemon.service';

describe('PokemonController', () => {
  let controller: PokemonController;
  let service: PokemonService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PokemonController],
      providers: [
        {
          provide: PokemonService,
          useValue: {
            fetchDetails: jest.fn().mockResolvedValue({
              name: 'pikachu',
              id: 25,
            }),
          },
        },
      ],
    }).compile();

    controller = module.get<PokemonController>(PokemonController);
    service = module.get<PokemonService>(PokemonService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should fetch Pokémon details by ID', async () => {
    const result = await controller.getDetailsById(25);
    expect(result).toEqual({
      name: 'pikachu',
      id: 25,
    });
  });
});
