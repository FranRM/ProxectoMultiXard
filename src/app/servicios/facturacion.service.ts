import { Injectable } from '@angular/core';
import {Factura} from '../clases/Factura';
import { Parte } from '../clases/Parte';
import { Xardin } from '../clases/Xardin';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FacturacionService {
  fakeArrayFacturas = Array<Factura>();
  ip = 'localhost';
  private urlFactura = 'http://' + this.ip + ':3000/api/factura';
  private urlFacturasTodas = 'http://' + this.ip + ':3000/api/pedirFacturasTodas';
  private urlFacturasCliente = 'http://' + this.ip + ':3000/api/pedirFacturasCliente';
  constructor( private http: HttpClient) {
    this.fakeArrayFacturas.push(new Factura(new Parte(new Xardin('Xardín Tritón',
    'Paseo Praia Silgar, 44, Sanxenxo, Pontevedra, Spain'), 'Pepe',
      'Podar setos da entrada Este.', ''), 40, new Date(), false, 'Pepe'));
    this.fakeArrayFacturas.push(new Factura(new Parte(
      new Xardin('Casa', 'Xil-Ganón, 24, Meaño, Pontevedra, Spain'), 'Pepe',
      'Desbrozar entrada.', 'Coidado coa cancilla.'), 60, new Date(), true, 'Pepe'));
  }
  getFakeArrayFacturas() {
    return this.fakeArrayFacturas;
  }
  insertarFactura(factura) {
    return this.http.post<any>(this.urlFactura, factura);
  }
  pedirFacturasTodas() {
    return this.http.post<any>(this.urlFacturasTodas, null);
  }
  pedirFacturasCliente(usuario) {
    return this.http.post<any>(this.urlFacturasCliente, usuario);
  }
}
