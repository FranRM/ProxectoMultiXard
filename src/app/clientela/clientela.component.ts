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
  
  constructor(private autentificacion:AutentificacionService) { }

  ngOnInit() {
  }
  pecharSesion(){
    this.logeado=false;
  }
  
  logearCliente(){
    this.autentificacion.logearUsuario(this.loginUserData)
      .subscribe(
        res => {
          console.log(res)
          this.logeado = true
        },
        err => console.log(err)
      )
    console.log("Logeandose cos seguintes datos: " + this.loginUserData)
  }

}
