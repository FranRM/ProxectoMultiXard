import { Injectable } from '@angular/core';
import {Parte} from '../clases/Parte';
import { Xardin } from '../clases/Xardin';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PeticionService {
  constructor(private http: HttpClient) {
    this.fakeArrayPartes
      .push(
        new Parte(
          new Xardin(
            'Xardín Tritón',
            'Paseo Praia Silgar,44, Sanxenxo, Pontevedra, Spain'),
            'Pepe',
          'Podar setos da entrada Este.',
          '')
      );
    this.fakeArrayPartes
      .push(
        new Parte(
          new Xardin('Casa', 'Xil-Ganón, 24, Meaño, Pontevedra, Spain'),
          'Pepe', 'Desbrozar entrada.', 'Coidado coa cancilla.'));
   }

  fakeArrayPartes = Array<Parte>();

  ip = 'localhost';
  private urlParte = 'http://' + this.ip + ':3000/api/parte';
  private urlPedirPartes = 'http://' + this.ip + ':3000/api/pedirPartes';
  private urlPedirPartesTodos = 'http://' + this.ip + ':3000/api/pedirPartesTodos';
  private urlPedirPartesCliente = 'http://' + this.ip + ':3000/api/pedirPartesCliente';
  private urlFinalizarParte = 'http://' + this.ip + ':3000/api/finalizarParte';
  getFakeArrayPartes() {
    return this.fakeArrayPartes;
   }
  peticionServicio(peticion) {
    return this.http.post<any>(this.urlParte, peticion);
  }
  peticionPartes() {
    return this.http.post<any>(this.urlPedirPartes, null);
  }
  peticionPartesTodos() {
    return this.http.post<any>(this.urlPedirPartesTodos, null);
  }
  peticionPartesCliente(usuario) {
    return this.http.post<any>(this.urlPedirPartesCliente, usuario);
  }
  finalizarParte(peticion) {
    return this.http.post<any>(this.urlFinalizarParte, peticion);
  }
}

