import { Component, OnInit } from '@angular/core';
import { AutentificacionService } from '../servicios/autentificacion.service';
import { AppComponent } from '../app.component';
import { Usuario } from '../clases/Usuario';

@Component({
  selector: 'app-clientela',
  templateUrl: './clientela.component.html',
  styleUrls: ['./clientela.component.sass']
})
export class ClientelaComponent implements OnInit {
  // tslint:disable-next-line: quotemark
  datosUsuario = {"user" : "", "pass": "" };
  // TODO - Usar Angular Material para os HTML.
  constructor(private autentificacion: AutentificacionService, private appComp: AppComponent) { }

  ngOnInit() {
  }
  pecharSesion() {
    this.appComp.logout();
  }
  logearCliente() {
    this.autentificacion.logearUsuario(this.datosUsuario)
      .subscribe(
        res => {
          console.log(res);
          localStorage.setItem('token', res.token);
          this.appComp.setLogeado(true);
          console.log('Logeandose cos seguintes datos: ' + this.datosUsuario.user);
        },
        err => console.log(err)
      );
  }
  pedirDatos() {
    this.autentificacion.recibirDatosUser(this.datosUsuario)
    .subscribe(
      res => console.log(res),
      err => console.log(err)
    );
  }
}
