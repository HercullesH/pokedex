import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PokemonDetails } from './pokemon-details.model';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private readonly apiUrl = 'http://localhost:3000/api/pokemon';

  constructor(private http: HttpClient) {}

  getPokemon(offset: number): Observable<any> {
    const params = new HttpParams().set('offset', offset.toString());
    return this.http.get(this.apiUrl, { params });
  }

  getDetails(id: string): Observable<PokemonDetails> {
    return this.http.get<PokemonDetails>(`${this.apiUrl}/details/${id}`);
  }

  searchPokemonByName(name: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/search/${name}`);
  }
}
