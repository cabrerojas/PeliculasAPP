import { Component, OnInit } from '@angular/core';
import { PeliculasService } from 'src/app/providers/peliculas.service';

import { Pelicula } from 'src/app/interfaces/pelicula.interface';

declare var jQuery: any;
declare var $: any;

import {NgbRatingConfig} from '@ng-bootstrap/ng-bootstrap';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  public peliculas: any[] = [];

  public urlImage = 'http://image.tmdb.org/t/p/w300/';

  constructor(public _ps: PeliculasService, config: NgbRatingConfig) {
    this._ps.getActuales()
    .subscribe((data: any) => {
      this.peliculas = data.results;
      console.log(data);
    } );

    config.readonly = true;
   }

  ngOnInit() {

  }

}
