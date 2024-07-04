import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DepartamentoModelo } from '../models/modelo_departamento';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DepartamentoService {

  private apiUrl = environment.apiUrl;

  constructor(private httpClient: HttpClient) { }

  getDepartamentos(): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}user/departamentos`);
  }

  createNewDepartamento(obj: DepartamentoModelo): Observable<any> {
    return this.httpClient.post(`${this.apiUrl}departamentos`, obj);
  }

  deleteDepartamento(id: number): Observable<any> {
    return this.httpClient.delete(`${this.apiUrl}departamentos/${id}`);
  }
}
