import { Component, OnDestroy, OnInit } from '@angular/core';
import { DatosService } from '../../../gifs/services/datos.service';
import { Subscription } from 'rxjs';
import { ObtenerGifsService } from '../../../gifs/services/obtener-gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent implements OnInit, OnDestroy {
  constructor(
    private datosService: DatosService,
    private obtenerGifsService: ObtenerGifsService
  ) {}
  subscripciones: Subscription[] = [];
  historico: string[] = [];
  ngOnInit(): void {
    const subscription1: Subscription = this.datosService.valor$.subscribe(
      (valor) => {
        if(!this.historico.includes(valor)){
          this.historico.push(valor);
        }

        console.log(this.historico);
      }
    );

    this.subscripciones.push(subscription1);
  }

  buscar(historial: string) {
    this.obtenerGifsService.searchTag(historial);
  }

  eliminar(){
    this.historico.length=0;
  }

  ngOnDestroy(): void {
    this.subscripciones.every((subs) => subs.unsubscribe());
  }
}
