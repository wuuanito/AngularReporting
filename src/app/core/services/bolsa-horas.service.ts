import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../enviroments/environment';

@Injectable({
  providedIn: 'root'
})
export class BolsaHorasService {

  private apiUrl = environment.apiUrl;

  constructor(private httpClient: HttpClient) { }

  guardarDatos(idProveedor: number, fecha: string, numHoras: number, descripcion: string): Observable<any> {
    const formData = {
      id_proveedores: idProveedor,
      fecha: fecha,
      numHoras: numHoras,
      descripcion: descripcion
    };

    return this.httpClient.post(`${this.apiUrl}bolsa_horas/insertarHoras`, formData);
  }

  ocultarHoras(idServicio: number): Observable<any> {
    return this.httpClient.put(`${this.apiUrl}bolsa_horas/ocultarHoras/${idServicio}`, {});
  }
}
