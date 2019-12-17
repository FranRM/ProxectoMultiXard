import { Component, OnInit, NgModule } from '@angular/core';
import { AutentificacionService } from '../servicios/autentificacion.service';
import { Usuario } from '../clases/Usuario';
import { Xardin } from '../clases/Xardin';
import { Router } from '@angular/router';
import { Parte } from '../clases/Parte';
import {PeticionService} from '../servicios/peticion.service';
import { FacturacionService } from '../servicios/facturacion.service';
import { Factura } from '../clases/Factura';
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
  accion;
  observacions;
  public xardinAEditar: Xardin;
  xardinSeleccionado: Xardin;
  arrayPartes = Array<Parte>();
  arrayFacturas = Array<Factura>();
  indiceBusqueda;

  constructor(
    private autenticador: AutentificacionService,
    private router: Router,
    private peticions: PeticionService,
    private facturas: FacturacionService,
    private serveParte: PeticionService
  ) {
    this.verEdicion = false;
  }

  ngOnInit() {
    this.usuarioLocal = this.autenticador.usuario;
    if (this.usuarioLocal.getUser() === 'test') {
      this.arrayFacturas = this.facturas.getFakeArrayFacturas();
      this.arrayPartes = this.serveParte.getFakeArrayPartes();
    } else {
    this.peticions.peticionPartesCliente(this.usuarioLocal).subscribe(
      res => {
        this.arrayPartes = res;
      },
      err => {
        console.error(err);
      }
    );
    this.facturas.pedirFacturasCliente(this.usuarioLocal).subscribe(
      res => {
        this.arrayFacturas = res;
      },
      err => {
        console.error(err);
      }
    );
  }
  }

  ngAfterViewInit() {
    if (!!this.autenticador.usuario) {
    } else {
      this.router.navigate(['/benvida']);
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
        console.log('Usuario gardado: ' + this.usuarioLocal.getUser());
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
      new Xardin(this.nomeNovo, this.direccionNova)
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
  engadirParte() {
    this.xardinSeleccionado = this.usuarioLocal.xardins[this.indiceBusqueda];
    const parteLocal = new Parte(this.xardinSeleccionado, this.usuarioLocal.getUser(), this.accion,
      this.observacions);
    this.arrayPartes.push(parteLocal);
    this.serveParte.peticionServicio(parteLocal).subscribe(
      res => {
        console.log(res);
      },
      err => console.error(err)
    );
    this.accion = '';
    this.observacions = '';
    this.xardinSeleccionado = null;
  }
  returnVisualPagado(factura: Factura) {
    if (factura.pagado === true) {
      return 'Factura xa pagada.';
    } else {
      return 'Factura pendente de pago.';
    }
  }
}
