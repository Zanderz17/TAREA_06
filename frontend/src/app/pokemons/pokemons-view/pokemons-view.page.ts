import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonsService } from 'src/app/_services/pokemons.service';

@Component({
  selector: 'app-pokemons-view',
  templateUrl: './pokemons-view.page.html',
  styleUrls: ['./pokemons-view.page.scss'],
})
export class PokemonsViewPage implements OnInit {

  pokemon: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private pokemonService: PokemonsService
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(
      data=>{
        const pokemon_id = data.get('pokemon_id');

        this.pokemonService.getPokemonById(pokemon_id).subscribe(
          response => {
            console.log(response);
            this.pokemon= response;
          },
          error => {
            console.error(error);
          }
        )
      }
    )
  }

}
