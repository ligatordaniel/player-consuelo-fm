import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { mdiAccount } from '@mdi/js'

/*Componentes*/
import { ServiceWorkerModule } from '@angular/service-worker';
import { CodepassComponent } from './components/codepass/codepass.component';
import { environment } from 'src/environments/environment';
import { HomebtnComponent } from './components/homebtn/homebtn.component';
import { PlayerComponent } from './components/player/player.component';
import { ErrorComponent } from './components/error/error.component';

/*Canales*/
import { DemoComponent } from './canales/demo/demo.component';
import { DemostracionComponent } from "./canales/demostracion/demostracion.component";
import { ClienteTestingComponent } from './canales/clienteTesting/clienteTesting.component';
import { Cliente001Component } from './canales/cliente001/cliente001.component';
import { Cliente002Component } from './canales/cliente002/cliente002.component';
import { Cliente003Component } from './canales/cliente003/cliente003.component';
import { PublicidadckComponent } from './components/publicidadck/publicidadck.component';
import { ReloadBtnComponent } from './components/reload-btn/reload-btn.component';



@NgModule({
  declarations: [
    AppComponent,
    CodepassComponent,
    HomebtnComponent,
    PlayerComponent,
    ErrorComponent,
    DemoComponent,
    DemostracionComponent,
    ClienteTestingComponent,
    Cliente001Component,
    Cliente002Component,
    Cliente003Component,
    PublicidadckComponent,
    ReloadBtnComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
