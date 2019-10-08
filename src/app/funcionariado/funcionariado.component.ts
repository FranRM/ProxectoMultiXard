import { Component, OnInit } from '@angular/core';
import { AutentificacionService } from 'src/app/servicios/autentificacion.service';
import { Usuario } from 'src/app/clases/Usuario';

@Component({
  selector: 'app-funcionariado',
  templateUrl: './funcionariado.component.html',
  styleUrls: ['./funcionariado.component.sass']
})
export class FuncionariadoComponent implements OnInit {
  logeado=false;
  loginAdminData = {}

  constructor(private autentificacion:AutentificacionService) { }

  ngOnInit() {
  }
  logearAdministrador() {
    this.autentificacion.logearAdministrador(this.loginAdminData)
      .subscribe(
        res => console.log(res),
        err => console.log(err),
      )
    console.log("Logeandose cos seguintes datos: " + this.loginAdminData)
    this.logeado=true
  }
  pecharSesion() {
    this.logeado = false;
    this.loginAdminData = null
  }
}
