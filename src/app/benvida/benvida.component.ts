import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-benvida',
  templateUrl: './benvida.component.html',
  styleUrls: ['./benvida.component.sass']
})
export class BenvidaComponent implements OnInit {
  benvida = 'Benvido a MultiXard';
  carrouselImages: string[];
  constructor(private appComp: AppComponent) { }

  ngOnInit() {
    this.carrouselImages = [
      '../../assets/imaxe/xardin e poda.jpg',
      '../../assets/imaxe/xardín de temporada.jpg'
    ];
  }
}
