import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BenvidaComponent } from './benvida/benvida.component';
import { ClientelaComponent } from './clientela/clientela.component';
import { FuncionariadoComponent } from './funcionariado/funcionariado.component';
import { ProletariadoComponent } from './proletariado/proletariado.component';


const routes: Routes = [
  { path:'',redirectTo:'/benvida',pathMatch:'full'},
  { path: 'benvida', component: BenvidaComponent },
  { path: 'clientela', component: ClientelaComponent },
  { path: 'funcionariado', component: FuncionariadoComponent },
  { path: 'proletariado', component: ProletariadoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
