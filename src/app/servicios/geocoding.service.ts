import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class GeocodingService {
  private urlGeocode = 'http://localhost:3000/api/conseguirCoordenadas';
  constructor(private http: HttpClient) {}
  public geocodificar(direccion) {
    return this.http.post<any>(this.urlGeocode, direccion);
  }
  /*public geocodificarInverso() {
    return this.geo.reverseGeocode('mapbox.places', '4.8936580', '52.3731720', (err, geoData) => {
      console.log(geoData);
    });
  }*/
}
