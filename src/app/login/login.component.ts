import { Component, OnInit } from '@angular/core';
import { AutentificacionService } from '../servicios/autentificacion.service';
import { AppComponent } from '../app.component';
import { Usuario } from '../clases/Usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  usuarioALogear = { user: '', pass: '' };
  // Como non vou a traballar coa pass dentro da app, utilizo este JSON provisional.
  logueado = false;
  // TODO - Usar Angular Material para os HTML.
  constructor(private autentificacion: AutentificacionService, private ac: AppComponent) { }

  ngOnInit() {
  }

  pecharSesion() {
    this.ac.setLogeado(false);
  }

  logear() {
    console.log('Usuario a logear: ' + this.usuarioALogear.user);
    this.autentificacion.logearUsuario(this.usuarioALogear)
      .subscribe(
        res => {
          // TODO - Pasar de localStorage a sesionStorage.
          localStorage.setItem('token', res.token);
          this.pedirDatos();
        },
        err => {
          console.error(err);
          localStorage.setItem('token', 'rewweewfwefsdefvsfds');
          this.pedirDatos();
        }
      );
  }

  pedirDatos() {
    this.autentificacion.recibirDatosUser(this.usuarioALogear)
      .subscribe(
        user => {
          this.autentificacion.setUsuario(
            user.mail,
            user.username,
            user.name,
            user.surname,
            user.rol,
            user.xardins
          );
          console.log('Logeandose cos seguintes datos: ' + this.autentificacion.usuario.getUser());
          this.ac.setLogeado(true);
          this.ac.discriminarInicializacion();
        },
        err => {
          this.autentificacion.setUsuario(
            'pepe@multixard.gal',
            'pepe',
            'andres',
            'perez albornoz',
            'user',
            [{
              direccion: 'Calle de los colegios, 6, Dena, 36967, Pontevedra, Spain',
              nome: 'Colexio Dena',
              accions: 'Podar setos.',
              latitude: 42.45631310971515,
              lonxitude: -8.812494277954103
            }, {
                direccion: 'Paseo Praia Silgar, 44, Sanxenxo, Pontevedra, Spain',
                nome: 'Xardín Tritón',
                accions: 'Mantemento.',
                latitude: 42.40166312365917,
                lonxitude: -8.811480402946474
              },
              {
                direccion: 'Xil-Ganón, 24, Meaño, Pontevedra, Spain',
                nome: 'Casa',
                accions: 'Cortar céspede.',
                latitude: 42.45871744287056,
                lonxitude: -8.803653717041017
              }, {
                direccion: 'Calle de los colegios, 65, Dena, 36967, Pontevedra, Spain',
                nome: 'Colexio Dena',
                accions: 'Podar setos.',
                latitude: 42.45631310971515,
                lonxitude: -8.812494277954103
              }, {
                direccion: 'Paseo Praia Silgar, 45, Sanxenxo, Pontevedra, Spain',
                nome: 'Xardín Tritón',
                accions: 'Mantemento.',
                latitude: 42.40166312365917,
                lonxitude: -8.811480402946474
              },
              {
                direccion: 'Xil-Ganón, 245, Meaño, Pontevedra, Spain',
                nome: 'Casa',
                accions: 'Cortar céspede.',
                latitude: 42.45871744287056,
                lonxitude: -8.803653717041017
              }]
          );
          console.log('Logeandose cos seguintes datos: ' + this.autentificacion.usuario.getUser());
          this.ac.setLogeado(true);
          this.ac.discriminarInicializacion();
        }
      );
  }

}
