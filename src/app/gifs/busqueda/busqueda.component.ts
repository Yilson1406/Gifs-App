import { Component, ElementRef, ViewChild} from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [
  ]
})
export class BusquedaComponent {

  @ViewChild('buscarletra')
  txtbuscar!: ElementRef<HTMLInputElement>;
  constructor(private _gitservices: GifsService){

  }
  buscar(){
    const valor = this.txtbuscar.nativeElement.value;
    this._gitservices.buscargif(valor)
    this.txtbuscar.nativeElement.value ='';
  }


}
