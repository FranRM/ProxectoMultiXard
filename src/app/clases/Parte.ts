import { Xardin } from '../clases/Xardin';
import { Usuario } from './Usuario';
export class Parte {
    usuario: string;
    xardin: Xardin;
    accions: string;
    observacions: string;
    rematado: boolean;
    constructor(xardin: Xardin, usuario: string, accions: string, observacions: string) {
        this.xardin = xardin;
        this.accions = accions;
        this.observacions = observacions;
        this.usuario = usuario;
        this.rematado = false;
    }
}
