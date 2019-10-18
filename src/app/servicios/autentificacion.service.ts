import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AutentificacionService {
  private urlLogeoUser = 'http://localhost:3000/api/loginUser';
  private urlGetUser = 'http://localhost:3000/api/peticion';
  private urlLogeoAdmin = 'http://localhost:3000/api/loginAdmin';
  private urlLogeoTrab = 'http://localhost:3000/api/loginTrab';
  private urlRexistro = 'http://localhost:3000/api/register';
  // TODO - Implementar os roles para a DB, e acabar de centralizar os 3 logins.
  constructor(private http: HttpClient, private router: Router) { }
  usuario;
  logearUsuario(user) {
    this.usuario = user;
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
  }
}
