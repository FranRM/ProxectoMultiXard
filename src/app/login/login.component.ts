import { Component, OnInit } from '@angular/core';
import { AutentificacionService } from '../servicios/autentificacion.service';
import { AppComponent } from '../app.component';
import { Usuario } from '../clases/Usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  usuarioALogear = { "user": "", "pass": "" };
  // Como non vou a traballar coa pass dentro da app, utilizo este JSON provisional.
  logueado = false;
  // TODO - Usar Angular Material para os HTML.
  constructor(private autentificacion: AutentificacionService, private ac: AppComponent) { }

  ngOnInit() {
  }

  pecharSesion() {
    this.ac.setLogeado(false);
  }

  logear() {
    console.log('Usuario a logear: ' + this.usuarioALogear.user);
    this.autentificacion.logearUsuario(this.usuarioALogear)
      .subscribe(
        res => {
          localStorage.setItem('token', res.token);
          this.pedirDatos();
        },
        err => console.error(err)
      );
  }

  pedirDatos() {
    this.autentificacion.recibirDatosUser(this.usuarioALogear)
      .subscribe(
        user => {
          this.autentificacion.setUsuario(
            user.mail,
            user.username,
            user.name,
            user.surname,
            user.rol,
            user.xardins
          );
          console.log('Logeandose cos seguintes datos: ' + this.autentificacion.usuario.getUser());
          this.ac.setLogeado(true);
          this.ac.discriminarInicializacion();
        },
        err => console.error(err)
      );
  }

}
