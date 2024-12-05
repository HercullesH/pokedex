import { Test, TestingModule } from '@nestjs/testing';
import { HttpService } from '@nestjs/axios';
import { PokemonService } from './pokemon.service';
import { of } from 'rxjs';
import { AxiosRequestHeaders, AxiosResponse } from 'axios';

describe('PokemonService', () => {
  let service: PokemonService;
  let httpService: HttpService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PokemonService,
        {
          provide: HttpService,
          useValue: {
            get: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<PokemonService>(PokemonService);
    httpService = module.get<HttpService>(HttpService);
  });

  it('should fetch Pokémon details by ID', async () => {
    const mockResponse: AxiosResponse = {
      data: {
        name: 'pikachu',
        id: 25,
      },
      status: 200,
      statusText: 'OK',
      headers: {
        'content-type': 'application/json',
      },
      config: {
        url: 'https://pokeapi.co/api/v2/pokemon/25',
        headers: {
        } as AxiosRequestHeaders,
        method: 'get',
        timeout: 0,
        transformRequest: [],
        transformResponse: [],
        validateStatus: () => true,
      },
    };

    jest.spyOn(httpService, 'get').mockImplementationOnce(() => of(mockResponse));

    const result = await service.fetchDetails(25);
    expect(result).toEqual(mockResponse.data);

    expect(httpService.get).toHaveBeenCalledWith('https://pokeapi.co/api/v2/pokemon/25');
  });
});
