import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonsService } from 'src/app/_services/pokemons.service';

@Component({
  selector: 'app-pokemons-edit',
  templateUrl: './pokemons-edit.page.html',
  styleUrls: ['./pokemons-edit.page.scss'],
})
export class PokemonsEditPage implements OnInit {
  pokemon_id: any;
  pokemon: any;
  pokemonForm: FormGroup;
  constructor(
    private pokemonsService: PokemonsService,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router
  ) { 
    this.pokemonForm = this.formBuilder.group({
      pokemon_name: [""],
      pokemon_height: [""],
      pokemon_category: [""],
      pokemon_weight: [""],
      pokemon_ability: [""],
      pokemon_type: [""],
      pokemon_image: [""]
    })
  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(
      data=>{
        this.pokemon_id = data.get('pokemon_id');

        this.pokemonsService.getPokemonById(this.pokemon_id).subscribe(
          response=>{
            console.log(response)
            this.pokemon=response;
            this.pokemonForm.patchValue(response);
          },

          error => {
            console.error(error)
          }
        )
      }
    )
  }

  updatePokemon(pokemon: any){
    this.pokemonsService.updatePokemon(this.pokemon_id, pokemon).subscribe(
      response => {
        console.log(response);
        this.router.navigate(['/pokemons']);
      },
      error => {
        console.error(error)
      }
    )

  }
}
