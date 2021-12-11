import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PhotoService } from 'src/app/_services/photo.service';
import { PokemonsService } from 'src/app/_services/pokemons.service';

@Component({
  selector: 'app-pokemons-create',
  templateUrl: './pokemons-create.page.html',
  styleUrls: ['./pokemons-create.page.scss'],
})
export class PokemonsCreatePage implements OnInit {
  pokemonsForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private pokemonService: PokemonsService,
    private router: Router,
    private photoService: PhotoService
  ) { 
    this.pokemonsForm=this.formBuilder.group({
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
  }

  addPokemon(values:any){
    this.pokemonService.insertPokemon(values).subscribe(
      response => {
        console.log(response);
        this.router.navigate(['/pokemons']);
      },
      error => {
        console.error(error);
      }
    )
  }

  async openCamera(){
    const picture_data = await this.photoService.takePicture();

    this.pokemonsForm.patchValue(picture_data);
  } 

}
