import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonsService } from 'src/app/_services/pokemons.service';

@Component({
  selector: 'app-pokemons-delete',
  templateUrl: './pokemons-delete.page.html',
  styleUrls: ['./pokemons-delete.page.scss'],
})
export class PokemonsDeletePage implements OnInit {
  pokemon_id: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private pokemonsService: PokemonsService,
    private router: Router
  ) { }

  ngOnInit() {

    this.activatedRoute.paramMap.subscribe(
      data=>{
        this.pokemon_id = data.get('pokemon_id')
      }
    )
  }

  deletePokemon(pokemon_id: any){
    this.pokemonsService.deletePokemon(pokemon_id).subscribe(
      response =>{
        console.log(response);
        this.router.navigate(['/pokemons']);

      }
    )
  }

}
