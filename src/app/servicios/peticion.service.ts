import { Injectable } from '@angular/core';
import {Parte} from '../clases/Parte';
import { Xardin } from '../clases/Xardin';

@Injectable({
  providedIn: 'root'
})
export class PeticionService {
  fakeArrayPartes = Array<Parte>();
  constructor() {
    this.fakeArrayPartes
      .push(
        new Parte(
          new Xardin(
            'Xardín Tritón',
            'Paseo Praia Silgar,44, Sanxenxo, Pontevedra, Spain',
            'Mantemento'),
          'Podar setos da entrada Este.',
          '')
      );
    this.fakeArrayPartes
      .push(
        new Parte(
          new Xardin('Casa', 'Xil-Ganón, 24, Meaño, Pontevedra, Spain', 'Mantemento'),
           'Desbrozar entrada.', 'Coidado coa cancilla.'));
   }
  getFakeArrayPartes() {
    return this.fakeArrayPartes;
   }
}

