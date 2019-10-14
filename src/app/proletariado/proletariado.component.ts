import { Component, OnInit } from '@angular/core';
import { AutentificacionService } from 'src/app/servicios/autentificacion.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-proletariado',
  templateUrl: './proletariado.component.html',
  styleUrls: ['./proletariado.component.sass']
})
export class ProletariadoComponent implements OnInit {

  logeado = false;
  loginTrabData = {};

  // TODO - Usar Angular Material para os HTML.
  constructor(private autentificacion: AutentificacionService, private appComp: AppComponent) { }

  ngOnInit() {
  }

  logearTraballador() {
    this.autentificacion.logearTraballador(this.loginTrabData)
      .subscribe(
        res => {
          console.log(res);
          this.appComp.setLogeado(true);
        },
        err => console.log(err)
    );
    console.log('Logeandose cos seguintes datos: ' + this.loginTrabData);
  }
  pecharSesion() {
    this.logeado = false;
  }

}
