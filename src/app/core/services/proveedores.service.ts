import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { modeloProveedor } from '../models/modelo_proveedor';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProveedoresService {
  private apiUrl = environment.apiUrl;

  constructor(private httpClient: HttpClient) { }

  getAllProveedores(): Observable<any[]> {
    return this.httpClient.get<any[]>(`${this.apiUrl}/bolsa_horas/proveedores`);
  }

  getAllServicios(proveedorId: number): Observable<any[]> {
    return this.httpClient.get<any[]>(`${this.apiUrl}/bolsa_horas/servicios`, { params: { proveedorId: proveedorId.toString() } });
  }
  getSumatorioHoras(id_proveedor: number): Observable<number> {
    return this.httpClient.get<number>(`${this.apiUrl}/bolsa_horas/sumatorioHoras/${id_proveedor}`);

  }



}
