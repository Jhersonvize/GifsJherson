import { Component, OnInit } from '@angular/core';
import { DatosService } from '../../services/datos.service';
import { IGifs } from '../../models/gifs.interface';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.scss',
})
export class CardListComponent implements OnInit {
  constructor(private datosService: DatosService) {}
  public datos!:IGifs;
  ngOnInit(): void {

    this.datosService.gifs$.subscribe((data) => (this.datos = data));
  }

}
