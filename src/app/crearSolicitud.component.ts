import { ServiciosService } from './epm.service';
import { Solicitud } from './solicitud';
import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  templateUrl: './crearSolicitud.html',
  styleUrls: ['./app.component.css']
})

export class CrearSolicitudComponent {

  solicitud: Solicitud = {
    codigo: '',
    usuario: '',
    estado: '',
    tipoDano: '',
    sector: '',
    prioridad: '',
    descripcion: '',
    calificacion: ''
  };
  errorMessage = '';

  constructor(public service: ServiciosService, public router: Router) {}

  onSave() {
    this.service.crearSolicitud(this.solicitud).subscribe(
      result => {
        if (result === '') {
          this.router.navigate(['/requests']);
        } else {
          this.errorMessage = result;
        }
    }
    );
  }

}
