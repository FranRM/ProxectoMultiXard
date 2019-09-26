import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientelaComponent } from './clientela/clientela.component';
import { ProletariadoComponent } from './proletariado/proletariado.component';
import { FuncionariadoComponent } from './funcionariado/funcionariado.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientelaComponent,
    ProletariadoComponent,
    FuncionariadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
