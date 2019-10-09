import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AutentificacionService {
  private urlLogeoUser='http://localhost:3000/api/loginUser'
  private urlLogeoAdmin = 'http://localhost:3000/api/loginAdmin'
  private urlRexistro = 'http://localhost:3000/api/register'
  constructor(private http:HttpClient) { }
  logearUsuario(user){
      return this.http.post<any>(this.urlLogeoUser,user)
  }
  logearAdministrador(admin) {
    return this.http.post<any>(this.urlLogeoAdmin, admin)
    //Detectado un bug que non permite logearse a os admins ata que un cliente se loguea.
  }
  registrarUsuario(user){
    return this.http.post<any>(this.urlRexistro,user)
  }
}
