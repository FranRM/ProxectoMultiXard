import { Component, OnInit } from '@angular/core';
import { AutentificacionService } from '../servicios/autentificacion.service';
import { AppComponent } from '../app.component';
import { Usuario } from '../clases/Usuario';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  usuarioALogear = { user: '', pass: '' };
  // Como non vou a traballar coa pass dentro da app, utilizo este JSON provisional.
  logueado = false;
  // TODO - Usar Angular Material para os HTML.
  constructor(private autentificacion: AutentificacionService,
              private ac: AppComponent) { }

  ngOnInit() {
  }

  pecharSesion() {
    this.ac.setLogeado(false);
  }

  logear() {
    console.log('Usuario a logear: ' + this.usuarioALogear.user);
    if (this.usuarioALogear.user === 'test' &&
     this.usuarioALogear.pass === 'test') {
      this.pedirDatosTest();
      this.ac.setLogeado(true);
      this.ac.discriminarInicializacion();
      localStorage.setItem('token', 'rewweewfwefsdefvsfds');
    } else {
      this.loguearContraServer(this.usuarioALogear);
    }
  }

  loguearContraServer(usuarioALogear) {
    try {
      this.autentificacion.logearUsuario(usuarioALogear)
        .subscribe(
          res => {
            // TODO - Pasar de localStorage a sesionStorage.
            localStorage.setItem('token', res.token);
            this.pedirDatos();
          },
          err => {
              console.error(err);
          }
        );
      } catch (HttpErrorResponse) {
        console.error('Error en login contra server');
      }
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
          console.log('Logeandose cos seguintes datos: ' +
          this.autentificacion.usuario.getUser());
          this.ac.setLogeado(true);
          this.ac.discriminarInicializacion();
        },
        err => {
            console.error(err);
          }
      );
  }
  pedirDatosTest() {
    this.autentificacion.setUsuario(this.autentificacion.getUsuarioTest().mail,
      this.autentificacion.getUsuarioTest().username,
      this.autentificacion.getUsuarioTest().name,
      this.autentificacion.getUsuarioTest().surname,
      this.autentificacion.getUsuarioTest().rol,
      this.autentificacion.getUsuarioTest().xardins);
  }
}
