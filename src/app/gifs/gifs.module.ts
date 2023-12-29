import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { GifsSearchBoxComponent } from './components/gifs-search-box/gifs-search-box.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    HomePageComponent,
    GifsSearchBoxComponent,
    CardListComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule,

  ],exports:[HomePageComponent]
})
export class GifsModule { }
