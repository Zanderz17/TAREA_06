import { Component, OnInit } from '@angular/core';
import { PokemonsService } from '../_services/pokemons.service';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.page.html',
  styleUrls: ['./pokemons.page.scss'],
})
export class PokemonsPage implements OnInit {
  pokemons: any[];

  constructor(
    private pokemonsService: PokemonsService
  ) { }

  ngOnInit() {
   
  }

  ionViewWillEnter(): void{
    this.pokemonsService.getPokemons().subscribe(data =>{
      this.pokemons = data;
    })
  } 

  getPictureUrl(pokemon_image){
    if(pokemon_image.includes("http://") || pokemon_image.includes("https://")){
      return pokemon_image;
    }
    else{
      return 'http://localhost:3000/'+pokemon_image;
    }
  }

}
