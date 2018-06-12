import { Component } from '@angular/core';
import { Http } from '@angular/http';
import {Router} from '@angular/router';
import {ServiciosService} from './epm.service';


@Component({
    templateUrl: './login.html',
    styleUrls: ['./app.component.css']
})

export class LoginComponent {

    documento = '';
    clave = '';
    errorMessage = '';

    constructor(public service: ServiciosService, public router: Router) {}

    OnLogin() {
      alert('Click');
      console.log(this.documento);
      this.service.login(this.documento, this.clave).subscribe(
        result => {
          alert('Autentico');
          this.router.navigate(['/solicitudes']);
        },
        error => {
          console.log(<any>error);
        }
      );
    }

  }
