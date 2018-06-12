import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import {AppRouterModule} from './routes.module';
import {LoginComponent} from './login.component';
import {ListaSolicitudesComponent} from './listaSolicitudes.component';
import {CrearSolicitudComponent} from './crearSolicitud.component';

import { ServiciosService } from './epm.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListaSolicitudesComponent,
    CrearSolicitudComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRouterModule,
    HttpModule
  ],
  providers: [
    ServiciosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
