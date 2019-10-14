import { Component } from '@angular/core';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Location } from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import {AutentificacionService} from '../app/servicios/autentificacion.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

export class AppComponent {
  // TODO - Engadir minimenú para o logout ensinando datos do user logueado.
  // TODO - Internacionalizar a app.

  constructor(private autenticador: AutentificacionService) {}
  public logeado = false;
  private location: Location;
  title = 'MultiXardApp';
  volverBenvida(): void {
    this.location.go('/benvida');
  }
  isLogeado(): boolean {
    return this.logeado;
    }
  setLogeado(valor: boolean) {
  this.logeado = valor;
  }
  logout() {
    this.logeado = false;
    this.autenticador.logoutUser();
  }
}
