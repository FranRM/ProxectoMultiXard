import { Component, NgModule } from '@angular/core';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Location } from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import {AutentificacionService} from '../app/servicios/autentificacion.service';
import { MatMenuModule } from '@angular/material/menu';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
@NgModule({
  imports: [MatMenuModule]
})

export class AppComponent {
  // TODO - Engadir minimenú para o logout ensinando datos do user logueado.
  // TODO - Internacionalizar a app.
  constructor(private autenticador: AutentificacionService, private router: Router) {}
  public logeado = false;
  private location: Location;
  nome: string;
  title = 'MultiXardApp';

  volverBenvida(): void {
    this.location.go('/benvida');
  }

  isLogeado(): boolean {
    return this.logeado;
  }

  setLogeado(valor: boolean) {
    this.logeado = valor;
    this.nome = this.autenticador.usuario.username;
  }

  logout() {
    this.logeado = false;
    this.autenticador.logoutUser();
  }

  discriminarInicializacion() {
    switch (this.autenticador.usuario.getRol()) {
      case 'admin':
        this.router.navigate(['/funcionariado']);
        break;
      case 'user':
        this.router.navigate(['/clientela']);
        break;
      default:
        this.router.navigate(['/proletariado']);
        break;
    }
  }
}
