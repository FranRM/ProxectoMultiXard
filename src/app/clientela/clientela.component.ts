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
  loginUserData;
  contrasinal;
  isir;
  user = new Usuario(this.isir, this.contrasinal);

  // TODO - Usar Angular Material para os HTML.
  constructor(private autentificacion: AutentificacionService, private appComp: AppComponent) { }

  ngOnInit() {
  }
  pecharSesion() {
    this.appComp.logout();
  }
  logearCliente() {
    this.loginUserData = { user: this.isir, pass: this.contrasinal };
    this.autentificacion.logearUsuario(this.loginUserData)
      .subscribe(
        res => {
          console.log(res);
          localStorage.setItem('token', res.token);
          this.appComp.setLogeado(true);
          console.log('Logeandose cos seguintes datos: ' + this.loginUserData);
        },
        err => console.log(err)
      );
  }

}
