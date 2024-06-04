import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { modeloProveedor } from '../models/modelo_proveedor';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProveedoresService {

  constructor(private httpClient: HttpClient) { }

  getAllProveedores(): Observable<any[]> {
    return this.httpClient.get<any[]>('http://localhost:3000/bolsa_horas/proveedores');
  }

  getAllServicios(proveedorId: number): Observable<any[]> {
    return this.httpClient.get<any[]>('http://localhost:3000/bolsa_horas/servicios', { params: { proveedorId: proveedorId.toString() } });
  }
  getSumatorioHoras(id_proveedor: number): Observable<number> {
    return this.httpClient.get<number>(`http://localhost:3000/bolsa_horas/sumatorioHoras/${id_proveedor}`);

  }



}
