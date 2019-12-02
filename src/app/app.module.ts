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
import { MapaComponent } from './mapa/mapa.component';
import { MaterialModule } from './shared/material.module';
import {MatExpansionModule} from '@angular/material';
import {NgbModule, NgbCarouselModule} from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    AppComponent,
    ClientelaComponent,
    ProletariadoComponent,
    FuncionariadoComponent,
    BenvidaComponent,
    RexistroComponent,
    LoginComponent,
    MapaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatExpansionModule,
    NgbModule,
    NgbCarouselModule
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
