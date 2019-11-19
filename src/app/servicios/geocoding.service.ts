import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class GeocodingService {
  private urlGeocode = 'http://localhost:3000/api/conseguirCoordenadas';
  private urlGeocodeInverso = 'http://localhost:3000/api/conseguirDireccion';
  constructor(private http: HttpClient) {}
  geocodificar(xardin) {
    return this.http.post<any>(this.urlGeocode, xardin);
  }
  public geocodificarInverso(xardin) {
    return this.http.post<any>(this.urlGeocodeInverso, xardin);
  }
}
