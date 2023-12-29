import { Injectable } from '@angular/core';
import { DatosService } from './datos.service';
import { ApiGifsService } from './api-gifs.service';

@Injectable({
  providedIn: 'root',
})
export class ObtenerGifsService {
  private _tagHistory: string[] = [];
  constructor(private datosService:DatosService,private apiGifsService:ApiGifsService) {}

  get tagHistory() {
    return [...this._tagHistory];
  }

  searchTag(valor:string) {

    this.datosService.valor$.next(valor);
    this.apiGifsService.obtenerGifs(valor).subscribe({next: data => {this.datosService.gifs$.next(data)}});
    /*  console.log(valor) */
  }
}
