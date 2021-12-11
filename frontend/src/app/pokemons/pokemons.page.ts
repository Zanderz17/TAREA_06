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

}
