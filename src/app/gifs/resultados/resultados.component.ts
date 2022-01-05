import { Component, OnInit } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styles: [
  ]
})
export class ResultadosComponent implements OnInit {

  constructor(private _gifs:GifsService) { }
  get resultado(){
    return this._gifs.resultado;
  }

  ngOnInit(): void {
  }

}
