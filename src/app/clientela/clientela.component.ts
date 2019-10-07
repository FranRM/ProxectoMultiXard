import { Component, OnInit } from '@angular/core';
import {AutentificacionService} from '../servicios/autentificacion.service'

@Component({
  selector: 'app-clientela',
  templateUrl: './clientela.component.html',
  styleUrls: ['./clientela.component.sass']
})
export class ClientelaComponent implements OnInit {
  logeado=true;
  loginUserData = {}
  regUserData = {}
  constructor(private autentificacion:AutentificacionService) { }

  ngOnInit() {
  }
  mudarLogeado(){
    this.logeado=!this.logeado;
  }
  logear(){
    
    this.autentificacion.logearUsuario(this.loginUserData)
      .subscribe(
        res=> console.log(res),
        err=> console.log(err)
      )
    console.log("Logeandose cos seguintes datos: " + this.loginUserData)
  }
  registrar() {
    this.autentificacion.registarUsuario(this.regUserData)
      .subscribe(
        res => console.log(res),
        err => console.log(err)
      )
  }
}
