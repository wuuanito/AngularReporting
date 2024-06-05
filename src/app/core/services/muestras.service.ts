import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MuestrasService {

  constructor( private httpclient:HttpClient ) { }

  getMuestras() {
    return this.httpclient.get<any[]>('http://localhost:3000/muestras/muestras');
  }
  agregarMuestra(formData: any): Observable<any> {
    return this.httpclient.post<any>('http://localhost:3000/muestras/agregar', formData);
  }
  insertData(data: any) {
    return this.httpclient.post<any>('http://localhost:3000/muestras/insertarlogistica', data);
  }
  getSolicitudAlmacen() {
    return this.httpclient.get<any[]>('http://localhost:3000/muestras/solicitudesalmacen');
  }

  sendPost(body:FormData):Observable<any>{
    return this.httpclient.post<any[]>('http://localhost:3000/muestras/subir', body);
  }
  downloadFile(filename: string) {
    const url = `http://localhost:3000/${filename}`;
    window.open(url, '_blank');
  }

  getSolicitudMuestras() : Observable<any[]>{
    return this.httpclient.get<any[]>('http://localhost:3000/muestras/solicitudmuestras');
  }
}
