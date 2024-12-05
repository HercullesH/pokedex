import { Controller, Get, NotFoundException, Param, Query, Res } from "@nestjs/common";
import { PokemonService } from "./pokemon.service";
import { PokemonDetails } from "./pokemon.model";

@Controller('pokemon')
export class PokemonController {
    constructor(private readonly pokemonService: PokemonService) {}

    @Get()
    async findAll(@Query('offset') offset: number) {
        if (!offset || isNaN(offset) || offset < 0) {
            offset = 0;
        }
        return this.pokemonService.fetchPokemon(offset);
    }

    @Get('details/:id')
    async getDetailsById(@Param('id') id: number): Promise<PokemonDetails> {
      if (!id) {
        throw new Error('ID is required');
      }

      return this.pokemonService.fetchDetails(id);
    }

    @Get('search/:name')
    async searchByName(@Param('name') name: string): Promise<PokemonDetails> {
      try {
        return await this.pokemonService.fetchDetailsByName(name);
      } catch (error) {
        throw new NotFoundException(`Pokemon with name "${name}" not found.`);
      }
    }
}
