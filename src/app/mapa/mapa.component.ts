import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import * as Leaflet from 'leaflet';
import { GeocodingService } from '../servicios/geocoding.service';
import { Xardin } from '../clases/Xardin';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.sass']
})
export class MapaComponent implements OnInit {

  @Input() xardinLocal: Xardin;
  @ViewChild('map', { static: false }) mapContainer: ElementRef;
  map: Leaflet;
  marker;
  constructor( private geo: GeocodingService) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.loadMap();
    if (!!this.xardinLocal.direccion) {
      this.geo.geocodificar(this.xardinLocal).subscribe(
        coordenadas => {
          console.log('Coordenadas: Latitude: ' + coordenadas[1] + ', Lonxitude: ' + coordenadas[0]);
          this.colocarMarcadorGeocode(coordenadas);
        },
        erro => {
          console.error('Erro na recepción das coordenadas' + erro);
        }
      );
    }
    this.map.on('click', e => {
      this.colocarMarcadorPulsando(e);
      this.imprimirCoordenadas(e);
    });
  }

  loadMap() {
    this. map = Leaflet.map(this.xardinLocal.direccion).setView([42.45892719924497, -8.751983642578127], 10);
    Leaflet.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox.streets',
      accessToken: 'pk.eyJ1IjoiZmVtaW8yMyIsImEiOiJjazJscm9jdHYwNzQ3M2NubDVraGg0dWx4In0.hP7aMRiLTs6UW07VB5ehKg'
    }).addTo(this.map);
  }

  colocarMarcadorPulsando(e) {
    if (this.map.hasLayer(this.marker)) {
      this.map.removeLayer(this.marker);
      this.imprimirCoordenadas(e);
    }
    this.marker = Leaflet.marker([e.latlng.lat, e.latlng.lng]).addTo(this.map);
  }
  colocarMarcadorGeocode(coordenadas) {
    if (this.map.hasLayer(this.marker)) {
      this.map.removeLayer(this.marker);
    }
    this.marker = Leaflet.marker([coordenadas[1], coordenadas[0]]).addTo(this.map);
  }

  imprimirCoordenadas(e) {
    console.log('Coordenadas: Latitude = ' + e.latlng.lat + ' Lonxitude = ' + e.latlng.lng);
    console.log(this.map.getZoom());
  }
}
