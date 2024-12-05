import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { PokemonService } from '../../pokemon/pokemon.service';

@Component({
  selector: 'pokedex',
  templateUrl: './pokemons.component.html',
  styleUrl: './pokemons.component.scss'
})
export class PokemonsPageComponent implements OnInit {
  pokemons: any[] = [];
  offset = 0;
  searchQuery = '';
  notFound = false;
  isLoading = false;

  constructor(
    private pokemonService: PokemonService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadPokemons();
  }

  searchPokemon(): void {
    if (!this.searchQuery.trim()) {
      return;
    }
    this.notFound = false;
  
    const query = this.searchQuery.trim().toLowerCase();
  
    this.pokemonService.searchPokemonByName(query).subscribe({
      next: (pokemon) => {
        this.router.navigate(['/details', pokemon.id]);
      },
      error: () => {
        this.notFound = true;
      },
    });
  }
  

  loadPokemons(): void {
    this.isLoading = true;
    this.pokemonService.getPokemon(this.offset).subscribe({
      next: (data) => {
        this.pokemons = [...this.pokemons, ...data.results];
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Erro ao carregar Pokémon:', err);
        this.isLoading = false;
      },
    });
  }

  viewDetails(url: string): void {
    const urlSplitted = url.split('/')
    const pokemonId = urlSplitted[urlSplitted.length - 2]
    this.router.navigate([`/details/${pokemonId}`]);
  }
  
  
  

  loadMore(): void {
    this.offset += 20;
    this.loadPokemons();
  }
}
