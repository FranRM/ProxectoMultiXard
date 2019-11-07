import { Component, OnInit, ViewChild, NgZone, Input } from '@angular/core';
import { AutentificacionService } from '../servicios/autentificacion.service';
import { Usuario } from '../clases/Usuario';
import { Xardin } from '../clases/Xardin';
import { Router } from '@angular/router';
import * as Leaflet from 'leaflet';
@Component({
  selector: 'app-clientela',
  templateUrl: './clientela.component.html',
  styleUrls: ['./clientela.component.sass']
})
export class ClientelaComponent implements OnInit {
  public usuarioLocal: Usuario;
  mapa;
  marker;

  constructor(private autenticador: AutentificacionService, private router: Router ) {
   }
  ngOnInit() {
    this.usuarioLocal = this.autenticador.usuario;
    if (!!this.autenticador.usuario) {
      this.mapa = Leaflet.map('mapa').setView([42.45892719924497, -8.751983642578127], 10);
      Leaflet.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox.streets',
        accessToken: 'pk.eyJ1IjoiZmVtaW8yMyIsImEiOiJjazJscm9jdHYwNzQ3M2NubDVraGg0dWx4In0.hP7aMRiLTs6UW07VB5ehKg'
      }).addTo(this.mapa);
      this.mapa.on('click', e => {
        this.colocarMarcador(e);
        this.imprimirCoordenadas(e);
      });
    } else {
      this.router.navigate([ '/benvida']);
    }
  }
  colocarMarcador(e) {
    if (this.mapa.hasLayer(this.marker)) {
      this.mapa.removeLayer(this.marker);
    }
    this.marker = Leaflet.marker([e.latlng.lat, e.latlng.lng]).addTo(this.mapa);
  }
  adicionXardin() {
    this.usuarioLocal.setXardin(new Xardin('Rúa dos colexios-1, Dena.', 'Corte de céspede.'));
    console.log(this.usuarioLocal);
  }
  gardarDatos() {
    this.autenticador.gardar(this.usuarioLocal)
      .subscribe(
        res => {
          console.log('Usuario gardado: ' + this.usuarioLocal.getUser());
        },
        err => console.error(err)
      );
  }
  imprimirCoordenadas(e) {
    console.log('Coordenadas: Latitude = ' + e.latlng.lat + ' Lonxitude = ' + e.latlng.lng);
    console.log(this.mapa.getZoom());
  }
}
