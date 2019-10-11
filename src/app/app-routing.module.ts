import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BenvidaComponent } from './benvida/benvida.component';
import { ClientelaComponent } from './clientela/clientela.component';
import { FuncionariadoComponent } from './funcionariado/funcionariado.component';
import { ProletariadoComponent } from './proletariado/proletariado.component';
import { RexistroComponent } from './rexistro/rexistro.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path: '', redirectTo: '/benvida', pathMatch: 'full'},
  { path: 'benvida', component: BenvidaComponent },
  { path: 'login', component: LoginComponent },
  { path: 'clientela', component: ClientelaComponent },
  { path: 'funcionariado', component: FuncionariadoComponent },
  { path: 'proletariado', component: ProletariadoComponent },
  { path: 'rexistro', component: RexistroComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
