import { Component, OnInit } from '@angular/core';
import { AutentificacionService } from '../servicios/autentificacion.service'

@Component({
  selector: 'app-rexistro',
  templateUrl: './rexistro.component.html',
  styleUrls: ['./rexistro.component.sass']
})
export class RexistroComponent implements OnInit {

  constructor(private autentificacion: AutentificacionService) { }
  regUserData = {}
  ngOnInit() {
  }
  rexistrar() {
    this.autentificacion.registarUsuario(this.regUserData)
      .subscribe(
        res => console.log(res),
        err => console.log(err)
      )
  }

}
