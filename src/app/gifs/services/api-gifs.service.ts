import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IGifs } from '../models/gifs.interface';

@Injectable({
  providedIn: 'root',
})
export class ApiGifsService {
  constructor(private httpClient: HttpClient) {}

  obtenerGifs(valor: string): Observable<IGifs> {
    return this.httpClient.get<IGifs>(
      `https://api.giphy.com/v1/gifs/search?api_key=B0pIov46DNEu9E36uitnfTKFb6i3WeL3&q=${valor}&limit=10`
    );
  }
}
