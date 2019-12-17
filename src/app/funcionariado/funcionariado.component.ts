import { Component, OnInit } from '@angular/core';
import { AutentificacionService } from 'src/app/servicios/autentificacion.service';
import { Usuario } from '../clases/Usuario';
import { Parte } from '../clases/Parte';
import { PeticionService } from '../servicios/peticion.service';
import { Factura } from '../clases/Factura';

@Component({
  selector: 'app-funcionariado',
  templateUrl: './funcionariado.component.html',
  styleUrls: ['./funcionariado.component.sass']
})
export class FuncionariadoComponent implements OnInit {
  arrayPartes = Array<Parte>();
  constructor(private parteService: PeticionService) { }
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
  }
  returnVisualPagado(factura: Factura) {
    if (factura.pagado === true) {
      return 'Factura xa pagada.';
    } else {
      return 'Factura pendente de pago.';
    }
  }
  returnParteFinalizado(parte: Parte) {
    if (parte.rematado === true) {
      return 'Parte finalizado.';
    } else {
      return 'Parte sen finalizar.';
    }
  }
}
