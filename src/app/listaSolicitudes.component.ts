import { Component } from '@angular/core';
import {Solicitud} from './solicitud';
import { Http } from '@angular/http';
import {ServiciosService} from './epm.service';
import {Router} from '@angular/router';

@Component({
    templateUrl: './listaSolicitudes.html',
    styleUrls: ['./listaSolicitudes.component.css']
})

export class ListaSolicitudesComponent {
  solicitudes: Solicitud[];

  constructor(public service: ServiciosService, public router: Router) {
    this.service.obtenerSolicitudes().subscribe(
      result => {
        const obj = JSON.parse(result);
        this.solicitudes = obj.solicitud;
      }
    );
  }

  onNew() {
    this.router.navigate(['/crearSolicitud']);
  }
}
