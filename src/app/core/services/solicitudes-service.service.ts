import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../config';

@Injectable({
  providedIn: 'root'
})
export class SolicitudesServiceService {

  constructor( private HttpClient:HttpClient) { }

  getAllSolicitudes(): Observable<any[]> {
    return this.HttpClient.get<any[]>('http://localhost:3000/solicitudes/resumen');
  }

  postSolicitud(formData: any): Observable<any> {
    return this.HttpClient.post<any>('http://localhost:3000/solicitudes/insertar', formData);
  }

  getDepartamentos(): Observable<any[]> {
    return this.HttpClient.get<any[]>('http://localhost:3000/solicitudes/departamentos');
  }

  updateEstadoSolicitud(solicitudId: number, nuevoEstado: string): Observable<any> {
    return this.HttpClient.put<any>(`http://localhost:3000/solicitudes/actualizarEstado/${solicitudId}`, { estado: nuevoEstado });
  }

  getSolicitudesPorDepartamento(idDepartamento: number): Observable<any[]> {
    return this.HttpClient.get<any[]>('http://localhost:3000/solicitudes/solicidudesDepartamento/' + idDepartamento);
  }

  postSolicitudCompras(formData: any): Observable<any> {
    return this.HttpClient.post<any>('http://localhost:3000/solicitudes/insertar', formData);
  }
  subscribeToSSE(): Observable<any> {
    return new Observable(observer => {
      const eventSource = new EventSource('http://localhost:3000/solicitudes/resumen');

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
