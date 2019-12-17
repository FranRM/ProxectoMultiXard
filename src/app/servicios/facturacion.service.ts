import { Injectable } from '@angular/core';
import {Factura} from '../clases/Factura';
import { Parte } from '../clases/Parte';
import { Xardin } from '../clases/Xardin';

@Injectable({
  providedIn: 'root'
})
export class FacturacionService {
  fakeArrayFacturas = Array<Factura>();
  constructor() {
    this.fakeArrayFacturas.push(new Factura(new Parte(new Xardin('Xardín Tritón',
    'Paseo Praia Silgar, 44, Sanxenxo, Pontevedra, Spain'), 'Pepe',
    'Podar setos da entrada Este.', ''), 40, new Date(), false));
    this.fakeArrayFacturas.push(new Factura(new Parte(
      new Xardin('Casa', 'Xil-Ganón, 24, Meaño, Pontevedra, Spain'), 'Pepe',
      'Desbrozar entrada.', 'Coidado coa cancilla.'), 60, new Date(), true));
  }
  ip = 'localhost';
  getFakeArrayFacturas() {
    return this.fakeArrayFacturas;
  }
}
