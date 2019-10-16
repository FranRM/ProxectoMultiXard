import { Component, OnInit } from '@angular/core';
import { AutentificacionService } from '../servicios/autentificacion.service';
import { Usuario } from '../clases/Usuario';

@Component({
  selector: 'app-rexistro',
  templateUrl: './rexistro.component.html',
  styleUrls: ['./rexistro.component.sass']
})
export class RexistroComponent implements OnInit {
  constructor(private autentificacion: AutentificacionService) { }
  usuario: Usuario;
  // TODO - Usar Angular Material para os HTML.
  ngOnInit() {}
  rexistrar() {
    this.autentificacion.registrarUsuario(this.usuario)
      .subscribe(
        res => {
          console.log(res);
          localStorage.setItem('token', res.token);
        },
        err => console.log(err)
      );
  }

}
