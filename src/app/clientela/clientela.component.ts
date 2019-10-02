import { Component, OnInit } from '@angular/core';
import {AutentificacionService} from '../servicios/autentificacion.service'

@Component({
  selector: 'app-clientela',
  templateUrl: './clientela.component.html',
  styleUrls: ['./clientela.component.sass']
})
export class ClientelaComponent implements OnInit {
  logeado=false;
  loginUserData = {}
  regUserData = {}
  constructor(private autentificacion:AutentificacionService) { }

  ngOnInit() {
  }
  mudarLogeado(boolean):void{
    this.logeado=boolean;
  }
  logear(){
    console.log(this.loginUserData)
    this.autentificacion.logearUsuario(this.loginUserData)
      .subscribe(
        res=> console.log(res),
        err=> console.log(err)
      )
  }
  registrar() {
    console.log(this.loginUserData)
    this.autentificacion.registarUsuario(this.loginUserData)
      .subscribe(
        res => console.log(res),
        err => console.log(err)
      )
  }
}
