import { Parte } from './Parte';
export class Factura {
    parte: Parte;
    importe: number;
    data: Date;
    pagado: boolean;
    usuario: string;
    constructor(parte: Parte, importe: number, data: Date, pagado: boolean, usuario: string) {
        this.parte = parte;
        this.importe = importe;
        this.data = data;
        this.pagado = pagado;
        this.usuario = usuario;
    }
}
