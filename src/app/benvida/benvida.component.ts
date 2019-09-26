import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-benvida',
  templateUrl: './benvida.component.html',
  styleUrls: ['./benvida.component.sass']
})
export class BenvidaComponent implements OnInit {
  benvida = 'Benvido a MultiXard';
  constructor() { }

  ngOnInit() {
  }

}
