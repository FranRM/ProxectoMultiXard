import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import { Usuario } from '../clases/Usuario';

@Injectable({
  providedIn: 'root'
})
export class AutentificacionService {
  private urlLogeoUser = 'http://localhost:3000/api/login';
  private urlGetUser = 'http://localhost:3000/api/peticion';
  private urlLogeoAdmin = 'http://localhost:3000/api/loginAdmin';
  private urlLogeoTrab = 'http://localhost:3000/api/loginTrab';
  private urlRexistro = 'http://localhost:3000/api/register';
  // TODO - Implementar os roles para a DB, e acabar de centralizar os 3 logins.
  usuario: Usuario;
  constructor(private http: HttpClient, private router: Router) {
  }
  logearUsuario(user) {
    console.log()
    return this.http.post<any>(this.urlLogeoUser, user);
  }
  recibirDatosUser(user) {
    return this.http.post<any>(this.urlGetUser, user);
  }
  logearAdministrador(admin) {
    return this.http.post<any>(this.urlLogeoAdmin, admin);
  }
  logearTraballador(trab) {
    return this.http.post<any>(this.urlLogeoTrab, trab);
  }
  registrarUsuario(user) {
    return this.http.post<any>(this.urlRexistro, user);
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
    this.usuario = new Usuario('', '', '', '', '');
  }
  setUsuario(mail: string, username: string, name: string, surname: string, rol: string){
    this.usuario = new Usuario(mail, username, name, surname, rol);
  }
}
