import { Injectable } from '@angular/core';
import { Geo } from '@mapbox/mapbox-gl-geocoder';


@Injectable({
  providedIn: 'root'
})
export class GeocodingService {
  constructor(private geo: Geo) {
    this.geo.accessToken('pk.eyJ1IjoiZmVtaW8yMyIsImEiOiJjazJscm9jdHYwNzQ3M2NubDVraGg0dWx4In0.hP7aMRiLTs6UW07VB5ehKg');
  }
  geocodificar() {
    this.geo.geocode('mapbox.places', 'Vigo,Spain', (err, geoData) => {
      console.log(geoData);
    });
  }
  geocodificarInverso() {
    this.geo.reverseGeocode('mapbox.places', '4.8936580', '52.3731720', (err, geoData) => {
      console.log(geoData);
    });
  }
}
