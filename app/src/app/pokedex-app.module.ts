import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";

import { routes } from './pokedex-app.routes';
import { PokedexAppComponent } from "./pokedex-app.component";
import { PokemonService } from "./pokemon/pokemon.service";
import { provideHttpClient } from "@angular/common/http";
import { DetailsPageComponent } from "./pages/details/details.component";
import { CommonModule } from "@angular/common";
import { PokemonsPageComponent } from "./pages/pokemons/pokemons.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [
    PokemonService,
    provideHttpClient(),
  ],
  declarations: [
    DetailsPageComponent,
    PokedexAppComponent,
    PokemonsPageComponent,
  ],
  bootstrap: [PokedexAppComponent],
})
export class PokedexAppModule {}
