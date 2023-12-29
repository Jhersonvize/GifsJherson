import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { IGifs } from '../models/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

constructor() { }
valor$ = new  BehaviorSubject<string>('XD');
gifs$ = new Subject<IGifs>();
}
