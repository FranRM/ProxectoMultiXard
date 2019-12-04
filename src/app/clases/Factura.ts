import { Parte } from './Parte';

export class Factura {
    parte: Parte;
    importe: number;
    data: Date;
    pagado: boolean;
    constructor(parte: Parte, importe: number, data: Date, pagado: boolean) {
        this.parte = parte;
        this.importe = importe;
        this.data = data;
        this.pagado = pagado;
    }
}
