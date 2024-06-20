import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../enviroments/environment';

@Injectable({
  providedIn: 'root'
})
export class MuestrasService {
  private apiUrl = environment.apiUrl;

  constructor( private httpclient:HttpClient ) { }

  getMuestras() {
    return this.httpclient.get<any[]>(`${this.apiUrl}/muestras/muestras`);
  }
  agregarMuestra(formData: any): Observable<any> {
    return this.httpclient.post<any>(`${this.apiUrl}/muestras/agregar`, formData);
  }
  insertData(data: any) {
    return this.httpclient.post<any>(`${this.apiUrl}/muestras/insertarlogistica`, data);
  }
  getSolicitudAlmacen() {
    return this.httpclient.get<any[]>(`${this.apiUrl}/muestras/solicitudesalmacen`);
  }

  sendPost(body:FormData):Observable<any>{
    return this.httpclient.put<any[]>(`${this.apiUrl}/muestras/subir`, body);
  }
  downloadFile(filename: string) {
    const url =`${this.apiUrl}/${filename}`;
    window.open(url, '_blank');
  }

  getSolicitudMuestras() : Observable<any[]>{
    return this.httpclient.get<any[]>(`${this.apiUrl}/muestras/solicitudmuestras`);
  }
  getSolicitudMuestrasCalidad() : Observable<any[]>{
    return this.httpclient.get<any[]>(`${this.apiUrl}/muestras/solicitudmuestrascalidad`);
  }
  getSolicitudMuestrasLogistica() : Observable<any[]>{
    return this.httpclient.get<any[]>(`${this.apiUrl}/muestras/solicitudmuestraslogistica`);
  }
  updateEstadoAlmacenProcesando(body: any): Observable<any> {
    return this.httpclient.put<any>(`${this.apiUrl}/muestras/actualizarestadoalmacenProcesando`, body);
  }
  enviarExpediciones(body: any): Observable<any> {
    return this.httpclient.put<any>(`${this.apiUrl}muestras/enviarExpediciones`, body);
  }
  devolverLaboratorio(body: any): Observable<any> {
    return this.httpclient.put<any>(`${this.apiUrl}/muestras/devolverLaboratorio`, body);
  }

  subscribeToSSE(): Observable<any> {
    return new Observable(observer => {
      const eventSource = new EventSource(`${this.apiUrl}/muestras/muestras`);

      eventSource.addEventListener('update', (event: any) => {
        const data = JSON.parse(event.data);
        observer.next(data);
      });

      eventSource.addEventListener('error', (error: any) => {
        observer.error(error.data);
      });

      return () => {
        eventSource.close();
      };
    });
  }


}
