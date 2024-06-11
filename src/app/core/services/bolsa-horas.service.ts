import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../config';

@Injectable({
  providedIn: 'root'
})
export class BolsaHorasService {

  constructor(private HttpClient:HttpClient) { }

  guardarDatos(idProveedor: number, fecha: string, numHoras: number, descripcion: string): Observable<any> {
    const formData = {
      id_proveedores: idProveedor,
      fecha: fecha,
      numHoras: numHoras,
      descripcion: descripcion
    };

    return this.HttpClient.post('/bolsa_horas/insertarHoras', formData);
  }

  ocultarHoras(idServicio: number): Observable<any> {
    return this.HttpClient.put(`http://localhost:3000/bolsa_horas/ocultarHoras/${idServicio}`, {});
}


}





