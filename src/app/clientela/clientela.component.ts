import { Component, OnInit, NgModule } from '@angular/core';
import { AutentificacionService } from '../servicios/autentificacion.service';
import { Usuario } from '../clases/Usuario';
import { Xardin } from '../clases/Xardin';
import { Router } from '@angular/router';
import { MapaComponent } from '../mapa/mapa.component';

@Component({
  selector: 'app-clientela',
  templateUrl: './clientela.component.html',
  styleUrls: ['./clientela.component.sass']
})
@NgModule({imports: [
  ],
exports: [
]})
export class ClientelaComponent implements OnInit {
  public usuarioLocal: Usuario;
  verEdicion = false;
  verCreacion = false;
  verVisualizacion = true;
  nomeNovo;
  direccionNova;
  accionNova;
  coordenadas;
  public xardinAEditar: Xardin;

  constructor(
    private autenticador: AutentificacionService,
    private router: Router
  ) {
    this.verEdicion = false;
  }

  ngOnInit() {
    this.usuarioLocal = this.autenticador.usuario;
  }

  ngAfterViewInit() {
    if (!!this.autenticador.usuario) {
    } else {
      this.router.navigate(["/benvida"]);
    }
  }

  cambiarEdicion() {
    this.verEdicion = !this.verEdicion;
    this.verVisualizacion = !this.verVisualizacion;
  }

  cambiarCreacion() {
    this.verCreacion = !this.verCreacion;
    this.verVisualizacion = !this.verVisualizacion;
  }

  getDireccion() {
    return this.xardinAEditar.direccion;
  }
  novoXardin() {
    this.cambiarCreacion();
  }

  gardarDatos() {
    this.autenticador.gardar(this.usuarioLocal).subscribe(
      res => {
        console.log("Usuario gardado: " + this.usuarioLocal.getUser());
      },
      err => console.error(err)
    );
  }

  editarXardin(xardin) {
    this.cambiarEdicion();
    this.xardinAEditar = xardin;
  }

  eliminarXardin(xardin) {
    this.xardinAEditar = xardin;
    this.usuarioLocal.xardins.splice(
      this.usuarioLocal.xardins.indexOf(xardin),
      1
    );
  }

  actualizarDatos() {
    this.usuarioLocal.xardins.splice(
      this.usuarioLocal.xardins.indexOf(this.xardinAEditar),
      1
    );
    this.usuarioLocal.xardins.push(this.xardinAEditar);
    this.cambiarEdicion();
  }

  engadirXardin() {
    this.usuarioLocal.setXardin(
      new Xardin(this.nomeNovo, this.direccionNova, this.accionNova)
    );
    this.cambiarCreacion();
  }
  recibirXardin(xardin: Xardin) {
    this.usuarioLocal.xardins.splice(
      this.usuarioLocal.xardins.indexOf(xardin),
      1
    );
    this.usuarioLocal.xardins.push(xardin);
  }
}
