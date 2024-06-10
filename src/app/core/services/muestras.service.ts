import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../config';

@Injectable({
  providedIn: 'root'
})
export class MuestrasService {

  constructor( private httpclient:HttpClient ) { }

  getMuestras() {
    return this.httpclient.get<any[]>(environment.apiUrl +'/muestras/muestras');
  }
  agregarMuestra(formData: any): Observable<any> {
    return this.httpclient.post<any>(environment.apiUrl +'/muestras/agregar', formData);
  }
  insertData(data: any) {
    return this.httpclient.post<any>(environment.apiUrl +'/muestras/insertarlogistica', data);
  }
  getSolicitudAlmacen() {
    return this.httpclient.get<any[]>(environment.apiUrl +'/muestras/solicitudesalmacen');
  }

  sendPost(body:FormData):Observable<any>{
    return this.httpclient.put<any[]>(environment.apiUrl +'/muestras/subir', body);
  }
  downloadFile(filename: string) {
    const url = environment.apiUrl +`/${filename}`;
    window.open(url, '_blank');
  }

  getSolicitudMuestras() : Observable<any[]>{
    return this.httpclient.get<any[]>(environment.apiUrl +'/muestras/solicitudmuestras');
  }
  getSolicitudMuestrasCalidad() : Observable<any[]>{
    return this.httpclient.get<any[]>(environment.apiUrl +'/muestras/solicitudmuestrascalidad');
  }
  getSolicitudMuestrasLogistica() : Observable<any[]>{
    return this.httpclient.get<any[]>(environment.apiUrl +'/muestras/solicitudmuestraslogistica');
  }
  updateEstadoAlmacenProcesando(body: any): Observable<any> {
    return this.httpclient.put<any>(environment.apiUrl +'/muestras/actualizarestadoalmacenProcesando', body);
  }
}
