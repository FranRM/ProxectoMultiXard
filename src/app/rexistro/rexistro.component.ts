import { Component, OnInit } from '@angular/core';
import { AutentificacionService } from '../servicios/autentificacion.service';

@Component({
  selector: 'app-rexistro',
  templateUrl: './rexistro.component.html',
  styleUrls: ['./rexistro.component.sass']
})
export class RexistroComponent implements OnInit {
  constructor(private autentificacion: AutentificacionService) { }
  usuario = { "mail": "","username": "", "pass": "", "name": "", "surname": "", "rol": "" };
  // TODO - Usar Angular Material para os HTML.
  ngOnInit() {}
  rexistrar() {
    this.autentificacion.registrar(this.usuario)
      .subscribe(
        res => {
          console.log(res);
          localStorage.setItem('token', res.token);
        },
        err => console.log(err)
      );
  }

}
