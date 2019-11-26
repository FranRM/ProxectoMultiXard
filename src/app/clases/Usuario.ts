import { Xardin } from '../clases/Xardin';
import { Factura } from '../clases/Factura';
export class Usuario {
         username: string;
         name: string;
         surname: string;
         rol: string;
         mail: string;
         xardins = new Array<Xardin>();
         facturas = new Array<Factura>();
         constructor(mail, username, name, surname, rol, array: Array<Xardin>) {
           this.username = username;
           this.name = name;
           this.surname = surname;
           this.rol = rol;
           this.mail = mail;
           this.xardins = array;
         }
         getUser(): string {
           return this.username;
         }
         getRol(): string {
           return this.rol;
         }
         setXardin(xardin: Xardin) {
           this.xardins.push(xardin);
           console.log(this.xardins.length);
         }
         getXardin() {
           this.xardins.values();
         }
       }
