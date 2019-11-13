import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ClientelaComponent } from './clientela/clientela.component';
import { ProletariadoComponent } from './proletariado/proletariado.component';
import { FuncionariadoComponent } from './funcionariado/funcionariado.component';
import { BenvidaComponent } from './benvida/benvida.component';
import { AutentificacionService } from './servicios/autentificacion.service';
import { RexistroComponent } from './rexistro/rexistro.component';
import { InterceptorTokenService } from '../app/servicios/interceptor-token.service';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GeocodingService } from '../app/servicios/geocoding.service';
import { MapaComponent } from './mapa/mapa.component';



@NgModule({
  declarations: [
    AppComponent,
    ClientelaComponent,
    ProletariadoComponent,
    FuncionariadoComponent,
    BenvidaComponent,
    RexistroComponent,
    LoginComponent,
    MapaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [AutentificacionService,
   {
     provide: HTTP_INTERCEPTORS,
     useClass: InterceptorTokenService,
     multi: true
    }
  ],
  bootstrap: [AppComponent],
  schemas: [
  ]
})


export class AppModule { }
