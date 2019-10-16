import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { AutentificacionService } from './autentificacion.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorTokenService implements  HttpInterceptor {

  constructor(private injector: Injector) { }

  intercept(req, next) {
    const autenticador = this.injector.get(AutentificacionService);
    const tokenizedReq = req.clone({
      setHeaders: {
        Authorization: 'Bearer ' + autenticador.getToken()
      }
    });
    return next.handle(tokenizedReq);
  }
}
