import { Component, OnInit } from '@angular/core';
import { AutentificacionService } from 'src/app/servicios/autentificacion.service';
import { Usuario } from '../clases/Usuario';
import { Parte } from '../clases/Parte';
import { PeticionService } from '../servicios/peticion.service';
import { Factura } from '../clases/Factura';
import { FacturacionService } from '../servicios/facturacion.service';

@Component({
  selector: 'app-funcionariado',
  templateUrl: './funcionariado.component.html',
  styleUrls: ['./funcionariado.component.sass']
})
export class FuncionariadoComponent implements OnInit {
  arrayPartes = Array<Parte>();
  arrayFacturas = Array<Factura>();
  verCreador = false;
  importe;
  parteLocal: Parte;
  constructor(private parteService: PeticionService, private factService: FacturacionService) { }
  finalizarParte(parte: Parte) {
    parte.rematado = true;
    this.parteService.finalizarParte(parte).subscribe(
      res => {
        console.log(res);
      },
      err => console.error(err)
    );
  }

  ngOnInit() {
    this.parteService.peticionPartesTodos().subscribe(
      res => {
        this.arrayPartes = res;
      },
      err => console.error(err)
    );
    this.factService.pedirFacturasTodas().subscribe(
      res => {
        this.arrayFacturas = res;
      },
      err => console.error(err)
    );
  }
  returnVisualPagado(factura: Factura) {
    if (factura.pagado === true) {
      return 'Factura xa pagada.';
    } else {
      return 'Factura pendente de pago.';
    }
  }
  returnParteFinalizado(parte: Parte) {
    const rematadoAux = parte.rematado;
    // tslint:disable-next-line: triple-equals
    if (rematadoAux == 'true') {
      return 'Parte finalizado.';
    } else {
      return 'Parte sen finalizar.';
    }
  }
  engadirFactura(parte: Parte) {
    this.verCreador = true;
    this.parteLocal = parte;
  }
  crearFactura() {
    const data = new Date();
    console.log(data);
    const factura = new Factura(this.parteLocal, this.importe, data, false, this.parteLocal.usuario);
    this.arrayFacturas.push(factura);
    this.factService.insertarFactura(factura).subscribe(
      res => {
        console.log(res);
      },
      err => console.error(err)
    );
    this.importe = null;
    this.parteLocal = null;
    this.verCreador = false;
  }
}
