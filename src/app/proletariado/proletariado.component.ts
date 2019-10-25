import { Component, OnInit } from '@angular/core';
import { AutentificacionService } from 'src/app/servicios/autentificacion.service';
import { AppComponent } from '../app.component';
import { Usuario } from '../clases/Usuario';

@Component({
  selector: 'app-proletariado',
  templateUrl: './proletariado.component.html',
  styleUrls: ['./proletariado.component.sass']
})
export class ProletariadoComponent implements OnInit {
  constructor() { }
  ngOnInit() {}
}
