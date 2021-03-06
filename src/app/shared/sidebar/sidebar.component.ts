import { Component} from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {


  constructor( private _gifservices: GifsService) { }

  get historial(){
  return this._gifservices.historial;
  }
  busca(item:string){
    this._gifservices.buscargif(item)
  }

}
