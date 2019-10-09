import { Injectable, Injector } from '@angular/core'
import { HttpInterceptor } from '@angular/common/http'
import { AutentificacionService } from './autentificacion.service'

@Injectable({
  providedIn: 'root'
})
export class InterceptorTokenService implements  HttpInterceptor{

  constructor(private injector:Injector) { }

  intercept(req, next){
    let autenticador = this.injector.get(AutentificacionService)
    let tokenizedReq = req.clone({
      setHeaders:{
        Authorization:'Bearer '+autenticador.getToken()
      }
    })
    return next.handle(tokenizedReq)
  }
}
