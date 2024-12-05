import { Injectable } from "@nestjs/common"; // Corrigido: Importando do @nestjs/common
import { HttpService } from "@nestjs/axios";
import { firstValueFrom } from "rxjs";

@Injectable()
export class PokemonService {
    private readonly baseURL = 'https://pokeapi.co/api/v2/pokemon';

    constructor(private readonly httpService: HttpService) {}

    async fetchPokemon(offset: number) {
        const url = `${this.baseURL}?offset=${offset}&limit=20`;
        const response = await firstValueFrom(this.httpService.get(url));
        return response.data;
    }

    async fetchDetails(id: number) {
        const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
        const response = await firstValueFrom(this.httpService.get(url));
        return response.data;
    }

    async fetchDetailsByName(name: string) {
        const url = `https://pokeapi.co/api/v2/pokemon/${name}`;
        const response = await firstValueFrom(this.httpService.get(url));
        return response.data;
    }
    
}
