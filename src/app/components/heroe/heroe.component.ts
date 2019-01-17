import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../servicios/heroes.service';



@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent  {


  heroe: any = {};


  constructor( private activateRote: ActivatedRoute,
      private _heroesService: HeroesService

    ) {

   this.activateRote.params.subscribe( params => {
      this.heroe = this._heroesService.getHeroe(params['id']);
   } );

  }



}
