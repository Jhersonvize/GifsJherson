import { Component } from '@angular/core';
import { MENSAJES_BOTON } from '../shared/enums/constantes.enum';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
 title:string = MENSAJES_BOTON.MENSAJE_INICIAL;

 boton():void{
  if (this.title===MENSAJES_BOTON.MENSAJE_INTERACCION) {
    this.title=  MENSAJES_BOTON.MENSAJE_INICIAL;
  } else {
    this.title=MENSAJES_BOTON.MENSAJE_INTERACCION
  }
 }
}
