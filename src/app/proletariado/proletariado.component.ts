import { Component, OnInit } from '@angular/core';
import { AutentificacionService } from 'src/app/servicios/autentificacion.service';
import { AppComponent } from '../app.component';
import { Usuario } from '../clases/Usuario';
import { PeticionService } from '../servicios/peticion.service';
import { Parte } from '../clases/Parte';

@Component({
  selector: 'app-proletariado',
  templateUrl: './proletariado.component.html',
  styleUrls: ['./proletariado.component.sass']
})
export class ProletariadoComponent implements OnInit {
  arrayPartes = Array<Parte>();
  constructor( private parteService: PeticionService) { }
  finalizarParte(parte: Parte) {
    parte.rematado = true;
    this.parteService.finalizarParte(parte).subscribe(
      res => {
        console.log(res);
      },
      err => console.error(err)
    );
  }

  ngOnInit() {
  this.parteService.peticionPartes().subscribe(
    res => {
      this.arrayPartes = res;
    },
    err => console.error(err)
  );
  }
}
