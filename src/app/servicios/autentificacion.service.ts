import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import { Usuario } from '../clases/Usuario';
import { Xardin } from '../clases/Xardin';

@Injectable({
  providedIn: 'root'
})
export class AutentificacionService {
  private urlLogeoUser = 'http://localhost:3000/api/login';
  private urlGetUser = 'http://localhost:3000/api/peticion';
  private urlRexistro = 'http://localhost:3000/api/register';
  private urlGardado = 'http://localhost:3000/api/gardar';
  private urlParte = 'http://localhost:3000/api/parte';
  // TODO - Implementar os roles para a DB, e acabar de centralizar os 3 logins.
  usuario: Usuario;
  constructor(private http: HttpClient, private router: Router) {
  }
  logearUsuario(user) {
    return this.http.post<any>(this.urlLogeoUser, user);
  }
  recibirDatosUser(user) {
    return this.http.post<any>(this.urlGetUser, user);
  }
  registrar(user) {
    return this.http.post<any>(this.urlRexistro, user);
  }
  peticionServicio(peticion) {
    return this.http.post<any>(this.urlParte, peticion);
  }
  gardar(user) {
    return this.http.post<any>(this.urlGardado, user);
  }
  loggedIn() {
    return !!localStorage.getItem('token');
  }
  getToken() {
    return localStorage.getItem('token');
  }
  logoutUser() {
    localStorage.removeItem('token');
    this.router.navigate(['/benvida']);
    this.usuario = new Usuario('', '', '', '', '', null);
  }
  setUsuario(mail: string, username: string, name: string, surname: string, rol: string, xardins: Array<Xardin>) {
    this.usuario = new Usuario(mail, username, name, surname, rol, xardins);
  }
}
