import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientelaComponent } from './clientela/clientela.component';
import { ProletariadoComponent } from './proletariado/proletariado.component';
import { FuncionariadoComponent } from './funcionariado/funcionariado.component';
import { BenvidaComponent } from './benvida/benvida.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientelaComponent,
    ProletariadoComponent,
    FuncionariadoComponent,
    BenvidaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
