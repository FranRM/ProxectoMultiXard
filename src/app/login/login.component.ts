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
  logueado = false;
  // TODO - Usar Angular Material para os HTML.s
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
        err => console.log(err)
      );
  }
  pedirDatos() {
    this.autentificacion.recibirDatosUser(this.usuarioALogear)
      .subscribe(
        res => {
          this.autentificacion.setUsuario(res.mail, res.username, res.name, res.surname, res.rol);
          console.log('Logeandose cos seguintes datos: ' + this.autentificacion.usuario.getUser());
          this.ac.setLogeado(true);
          this.ac.discriminarInicializacion();
        },
        err => console.log(err)
      );
  }
}
