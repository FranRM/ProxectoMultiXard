import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AutentificacionService {
  private urlLogeo='http://localhost:3000/api/login'
  private urlRexistro = 'http://localhost:3000/api/register'
  constructor(private http:HttpClient) { }
  logearUsuario(user){
      return this.http.post<any>(this.urlLogeo,user)
  }
  registarUsuario(user){
    return this.http.post<any>(this.urlRexistro,user)
  }
}
