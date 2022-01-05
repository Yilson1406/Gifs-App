import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, Welcome } from '../interfaces/response.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  constructor(private _http:HttpClient){

    if (localStorage.getItem('historial')) {
      this._historial = JSON.parse(localStorage.getItem('historial')!)
    }
    if (localStorage.getItem('ultimo')) {
      this.resultado = JSON.parse(localStorage.getItem('ultimo')!)
    }


  }
  private apikey:string = '0bPNKZXMSnNksEq2jt5jbUw3wApKQSyt';
  private URLBASE:string = 'https://api.giphy.com/v1/gifs/search?';
  private _historial:string[] =[];
  resultado:Gif[] =[]
  get historial(){
    return [...this._historial];
  }
  buscargif(query:string){
    // guardar datos en mminusculas
    query = query.trim().toLocaleLowerCase();

    //evitar insercion de datos repetidos
    if(!this._historial.includes(query)){
      this._historial.unshift( query );
      //solo 10 datos en el arreglo
    this._historial = this._historial.splice(0,10);
    //guardar lista de busqueda
    localStorage.setItem('historial',JSON.stringify(this._historial))

    }



    const params = new HttpParams()
    .set('api_key',this.apikey)
    .set('limit','10')
    .set('q',query)

    this._http.get<Welcome>(`${this.URLBASE}`,{params})
          .subscribe(data=>{
            this.resultado = data.data
            localStorage.setItem('ultimo',JSON.stringify(this.resultado))
            // console.log(data.data);
          });

  }
}
