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
  edicion;
  creacion;
  indiceParaAModificación;
  public xardinAEditar: Xardin;

  constructor(private autenticador: AutentificacionService, private router: Router) {
    this.edicion = false;
   }

  ngOnInit() {
    this.usuarioLocal = this.autenticador.usuario;
  }

  ngAfterViewInit() {
    if (!!this.autenticador.usuario) {
    } else {
      this.router.navigate(['/benvida']);
    }
  }

  getDireccion() {
    return this.xardinAEditar.direccion;
  }
  adicionXardin() {
    this.usuarioLocal.setXardin(new Xardin('', '', ''));
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

  editarXardin(xardin) {
    this.edicion = true;
    this.xardinAEditar = xardin;
    this.indiceParaAModificación = this.usuarioLocal.xardins.indexOf(this.xardinAEditar);
  }

  actualizarDatos() {
    this.usuarioLocal.xardins.splice(this.indiceParaAModificación,1);
    this.usuarioLocal.xardins.push(this.xardinAEditar);
    this.edicion = false;
  }
  busquedaXardin(xardin: Xardin) {
    return xardin.direccion === this.getDireccion();
  }
}
