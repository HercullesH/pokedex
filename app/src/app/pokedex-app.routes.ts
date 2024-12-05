import { Routes } from '@angular/router';
import { DetailsPageComponent } from './pages/details/details.component';
import { PokemonsPageComponent } from './pages/pokemons/pokemons.component';

export const routes: Routes = [
    { path: '', component: PokemonsPageComponent },
    { path: 'details/:id', component: DetailsPageComponent }
];
