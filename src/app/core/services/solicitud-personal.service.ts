import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SolicituPersonalComponent, SolicitudPersonal } from '../../pages/personal/solicitu-personal/solicitu-personal.component';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SolicitudPersonalService {

  constructor( private httpclient:HttpClient ) { }
  enviarSolicitud(solicitud: SolicitudPersonal): Observable<{ success: boolean, message: string, data?: any }> {
    return this.httpclient.post<{ success: boolean, message: string, data?: any }>('http://localhost:3000/solicitud_personal/insertar', solicitud);
  }

  getAllSolicitudes(): Observable<any[]> {
    return this.httpclient.get<any[]>('http://localhost:3000/solicitud_personal/resumen');
  }

  aprobarSolicitud(id: number) {
    return this.httpclient.put<any>(`http://localhost:3000/solicitud_personal/aprobar/${+id}`, {});
  }

  denegarSolicitud(id: number) {
    return this.httpclient.put<any>(`http://localhost:3000/solicitud_personal/denegar/${+id}`, {});
  }
}
