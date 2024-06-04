import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DepartamentoModelo } from '../models/modelo_departamento';
import { Observable } from 'rxjs';
import { environment } from '../../../config';

@Injectable({
  providedIn: 'root'
})
export class DepartamentoService {

  constructor(private HttpClient : HttpClient) {

   }

   getDepartamentos(): Observable<any> {
    return this.HttpClient.get('http://localhost:3000/user/departamentos');
  }


  createNewDepartamento(obj: DepartamentoModelo): Observable<any> {
    return this.HttpClient.post('http://localhost:3000/departamentos', obj);
  }
  deleteDepartamento(id: number): Observable<any> {
    return this.HttpClient.delete('http://localhost:3000/departamentos/${id}');
  }
}
