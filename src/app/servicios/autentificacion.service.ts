import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AutentificacionService {
  private urlLogeoUser='http://localhost:3000/api/loginUser'
  private urlLogeoAdmin = 'http://localhost:3000/api/loginAdmin'
  private urlLogeoTrab = 'http://localhost:3000/api/loginTrab'
  private urlRexistro = 'http://localhost:3000/api/register'
  constructor(private http:HttpClient) { }
  logearUsuario(user){
      return this.http.post<any>(this.urlLogeoUser, user)
  }
  logearAdministrador(admin) {
    return this.http.post<any>(this.urlLogeoAdmin, admin)
  }
  logearTraballador(trab) {
    return this.http.post<any>(this.urlLogeoTrab, trab)
  }
  registrarUsuario(user){
    return this.http.post<any>(this.urlRexistro, user)
  }
  loggedIn(){
    return !!localStorage.getItem('token')
  }
  getToken(){
    return localStorage.getItem('token')
  }
}
