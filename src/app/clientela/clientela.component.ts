import { Component, OnInit } from '@angular/core';
import { AutentificacionService } from '../servicios/autentificacion.service';
import { Usuario } from '../clases/Usuario';
import { Xardin } from '../clases/Xardin';

@Component({
  selector: 'app-clientela',
  templateUrl: './clientela.component.html',
  styleUrls: ['./clientela.component.sass']
})
export class ClientelaComponent implements OnInit {
  public usuarioLocal: Usuario;
  constructor(private autenticador: AutentificacionService) {
    this.usuarioLocal = this.autenticador.usuario;
   }
  ngOnInit() {
  }
  adicionXardin() {
    this.usuarioLocal.setXardin(new Xardin('Rúa dos colexios-1, Dena.', 'Corte de céspede.'));
    console.log(this.usuarioLocal);
  }
  gardarDatos() {
    this.autenticador.gardar(this.usuarioLocal)
      .subscribe(
        res => {
          console.log('Usuario gardado: ' + this.usuarioLocal.getUser());
        },
        err => console.log(err)
      );
  }
  }
}
