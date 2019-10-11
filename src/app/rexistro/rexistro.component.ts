import { Component, OnInit } from '@angular/core';
import { AutentificacionService } from '../servicios/autentificacion.service';

@Component({
  selector: 'app-rexistro',
  templateUrl: './rexistro.component.html',
  styleUrls: ['./rexistro.component.sass']
})
export class RexistroComponent implements OnInit {

  constructor(private autentificacion: AutentificacionService) { }
  regUserData = {};
  datosIntroducidos = false;
  ngOnInit() {
  }
  rexistrar() {

    this.autentificacion.registrarUsuario(this.regUserData)
      .subscribe(
        res => {
          console.log(res);
          localStorage.setItem('token', res.token);
        },
        err => console.log(err)
      );
  }

}
