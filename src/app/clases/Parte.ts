import { Xardin } from '../clases/Xardin';
export class Parte {
    xardin: Xardin;
    accions: string;
    observacions: string;
    constructor(xardin: Xardin, accions: string, observacions: string) {
        this.xardin = xardin;
        this.accions = accions;
        this.observacions = observacions;
    }
}
