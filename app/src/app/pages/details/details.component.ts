import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonService } from '../../pokemon/pokemon.service';

@Component({
  selector: 'app-details-page',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsPageComponent implements OnInit {
  pokemonDetails: any = null;

  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.fetchDetails(id);
    } else {
      console.error('No ID found in route parameters.');
    }
  }

  goBack(): void {
    this.router.navigate(['/']); // Navega para a rota raiz
  }

  fetchDetails(id: string): void {
    console.log('este é o id')
    this.pokemonService.getDetails(id).subscribe({
      next: (details) => {
        this.pokemonDetails = details;
      },
      error: (err) => {
        console.error('Error fetching Pokémon details:', err);
      },
    });
  }
}
