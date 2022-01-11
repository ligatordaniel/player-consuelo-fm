import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CodepassComponent } from './components/codepass/codepass.component';
import { ErrorComponent } from './components/error/error.component';
import { PrivacidadComponent } from './components/privacidad/privacidad.component';

import { DemoComponent } from './canales/demo/demo.component';
import { DemostracionComponent } from "./canales/demostracion/demostracion.component";
import { ClienteTestingComponent } from './canales/clienteTesting/clienteTesting.component';
import { Cliente001Component } from './canales/cliente001/cliente001.component';
import { Cliente002Component } from './canales/cliente002/cliente002.component';
import { Cliente003Component } from './canales/cliente003/cliente003.component';



const routes: Routes = [

  {path: '', component: CodepassComponent}, /*no hay ruta lleva a codepassComponent*/

  {path: 'demo', component: DemoComponent},
  {path: 'privacidad', component: PrivacidadComponent},
  {path: 'demostracion', component: DemostracionComponent},
  {path: 'clientetesting', component: ClienteTestingComponent},

  {path: 'cordillera01', component: Cliente001Component},
  {path: 'cliente002', component: Cliente002Component},
  {path: 'cliente003', component: Cliente003Component},

  //{path: '**', component: ErrorComponent}, /*siempre al final sino no funka*/

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
