import { CrearSolicitudComponent } from './crearSolicitud.component';
import { ListaSolicitudesComponent } from './listaSolicitudes.component';
import {NgModule} from '@angular/core';
import {RouterModule, Routes, Router} from '@angular/router';
import { LoginComponent } from './login.component';

const appModules: Routes = [
{path: '', component: LoginComponent},
{path: 'solicitudes', component: ListaSolicitudesComponent},
{path: 'crearSolicitud', component: CrearSolicitudComponent}
];

@NgModule({
    imports: [
        RouterModule.forRoot(appModules, {})
    ],
    exports: [RouterModule],
    providers: []
})

export class AppRouterModule {}
