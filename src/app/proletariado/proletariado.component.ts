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

  logeado = false;
  user: string;
  pass: string;
  usuario = new Usuario(this.user, this.pass, '', '');

  // TODO - Usar Angular Material para os HTML.
  constructor(private autentificacion: AutentificacionService, private appComp: AppComponent) { }

  ngOnInit() {
  }

  logearTraballador() {
    this.autentificacion.logearTraballador(this.usuario)
      .subscribe(
        res => {
          console.log(res);
          this.appComp.setLogeado(true);
        },
        err => console.log(err)
    );
    console.log('Logeandose cos seguintes datos: ' + this.usuario);
  }
  pecharSesion() {
    this.logeado = false;
  }

}
