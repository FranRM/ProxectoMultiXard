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

  usuario: Usuario;
  // TODO - Usar Angular Material para os HTML.
  constructor(private autentificacion: AutentificacionService, private ac: AppComponent) { }
  ngOnInit() {
  }
  pecharSesion() {
    this.ac.setLogeado(false);
  }
  logear() {
    this.autentificacion.logearUsuario(this.usuario)
      .subscribe(
        res => {
          console.log(res);
          localStorage.setItem('token', res.token);
          this.ac.setLogeado(true);
          console.log('Logeandose cos seguintes datos: ' + this.usuario);
        },
        err => console.log(err)
      );
  }
}
