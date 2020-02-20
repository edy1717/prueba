import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AltaInsumosComponent } from './pages/alta-insumos/alta-insumos.component';


const routes: Routes = [
  { path: 'login', component : LoginComponent },
  { path: 'registroInsumos', component : AltaInsumosComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

  }
