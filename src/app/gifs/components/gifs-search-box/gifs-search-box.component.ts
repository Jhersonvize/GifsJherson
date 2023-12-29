import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { DatosService } from '../../services/datos.service';
import { Subscription } from 'rxjs';
import { ApiGifsService } from '../../services/api-gifs.service';
import { ObtenerGifsService } from '../../services/obtener-gifs.service';

@Component({
  selector: 'app-gifs-search-box',
  templateUrl: './gifs-search-box.component.html',
  styleUrl: './gifs-search-box.component.scss',
})
export class GifsSearchBoxComponent implements OnInit,OnDestroy {
  @ViewChild('txtTagInput')
  public tagInput!: ElementRef<HTMLInputElement>;
  valor!:string;
  constructor(private datosService: DatosService, private apiGifsService:ApiGifsService, private obtenerGifsService:ObtenerGifsService) {}
  subscriptions: Subscription[] = [];
  ngOnInit(): void {
    const subscription1$ = this.datosService.valor$.subscribe((data) =>
    this.valor=data
    );
    this.subscriptions.push(subscription1$);
  }
  searchTag() {
    const valor = this.tagInput.nativeElement.value;
    this.obtenerGifsService.searchTag(valor);
    this.tagInput.nativeElement.value='';
    /*  console.log(valor) */
  }

  ngOnDestroy() {
    this.subscriptions.every((subs) => subs.unsubscribe());
  }
}
