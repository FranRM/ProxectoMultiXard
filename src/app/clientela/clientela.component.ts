import { Component, OnInit, ViewChild, NgZone, Input } from '@angular/core';
import { AutentificacionService } from '../servicios/autentificacion.service';
import { Usuario } from '../clases/Usuario';
import { Xardin } from '../clases/Xardin';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clientela',
  templateUrl: './clientela.component.html',
  styleUrls: ['./clientela.component.sass']
})
export class ClientelaComponent implements OnInit {
  public usuarioLocal: Usuario;

  constructor(private autenticador: AutentificacionService, private router: Router) {
   }
  ngOnInit() {
    this.usuarioLocal = this.autenticador.usuario;
  }
  ngAfterViewInit() {
    if (!!this.autenticador.usuario) {
      this.usuarioLocal.xardins.forEach((xardin) => {
      });
    } else {
      this.router.navigate(['/benvida']);
    }
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
        err => console.error(err)
      );
  }
}
