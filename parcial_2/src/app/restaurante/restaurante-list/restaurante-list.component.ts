import { Component, OnInit } from '@angular/core';
import { RestauranteDetail } from '../restaurante-detail';
import { RestauranteService } from '../restaurante.service';

@Component({
  selector: 'app-restaurante-list',
  templateUrl: './restaurante-list.component.html',
  styleUrls: ['./restaurante-list.component.css']
})
export class RestauranteListComponent implements OnInit {

  partes: Array<RestauranteDetail> = [];
  selected: Boolean = false;
  selectedRestaurante!: RestauranteDetail;
  p: number = 1;
  searchedCategoria: any;

  constructor(private RestauranteServie: RestauranteService) { }

  getPartes(): void {
    this.RestauranteServie.getRestaurantes().subscribe((restaurantes) => {
      this.restaurantes = restaurantes;
    });

  }

  onSelected(parte: ParteDetail): void {
    this.selected = true;
    this.selectedParte = parte;
  }

  ngOnInit() {
    this.getPartes();
  }

}
