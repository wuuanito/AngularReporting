import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginModel } from '../models/modelo_login';
import { Observable } from 'rxjs';
import { Empleadomodelo } from '../models/modelo_empleado';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  static login
    <T>(login: any, loginData: {
      username: string; password: string;
    }): Observable<any> {
      throw new Error('Method not implemented.');
  }
  private apiUrl = environment.apiUrl;


  constructor(private httpClient: HttpClient) { }

  login(obj: LoginModel): Observable<any> {
    console.log('Desde el servicio:',obj); // Imprime los datos que se están enviando al backend
    return this.httpClient.post(`${this.apiUrl}/user/login`, obj);
  }

  getAllEmpleados(): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}/user/empleados`);
  }

  getEmpleadosPorDepartamento(idDepartamento: number): Observable<Empleadomodelo[]> {
    return this.httpClient.get<Empleadomodelo[]>(`${this.apiUrl}/user/departamento/${idDepartamento}`);
  }





}
