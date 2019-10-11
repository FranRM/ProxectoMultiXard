import { Component, OnInit } from '@angular/core';
import { AutentificacionService } from '../servicios/autentificacion.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  loginData = {};
  constructor(private autentificacion: AutentificacionService, private ac: AppComponent) { }
  ngOnInit() {
  }
  pecharSesion() {
    this.ac.setLogeado(false);
  }
  logear() {
    this.autentificacion.logearUsuario(this.loginData)
      .subscribe(
        res => {
          console.log(res);
          localStorage.setItem('token', res.token);
          this.ac.setLogeado(true);
          console.log('Logeandose cos seguintes datos: ' + this.loginData);
        },
        err => console.log(err)
      );
  }

}
