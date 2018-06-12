import { Solicitud } from './solicitud';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ServiciosService {

    constructor(private http: Http) {}

    login(documento: string, clave: string): Observable<any> {
        return this.http.get('http://localhost:8080/EpmService/rest/Usuario/login?documento=' + documento +
        '&password=' + clave).map(response => response.text());
      }

      obtenerSolicitudes() {
        return this.http.get('http://localhost:8080/EpmService/rest/Solicitud').
        map(response => response.text());
      }

      crearSolicitud(solicitud: Solicitud) {
        return this.http.get('http://localhost:8080/EpmService/rest/Solicitud/crear?sector=' + solicitud.sector +
        '&usuario=' + solicitud.usuario + '&estado=' + solicitud.estado + '&tipoDano=' + solicitud.tipoDano +
        '&prioridad=' + solicitud.prioridad + '&descripcion=' + solicitud.descripcion)
        .map(response => response.text());
      }
}
