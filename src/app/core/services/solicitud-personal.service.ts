import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SolicituPersonalComponent, SolicitudPersonal } from '../../pages/personal/solicitu-personal/solicitu-personal.component';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SolicitudPersonalService {

  private apiUrl = environment.apiUrl;


  constructor( private httpclient:HttpClient ) { }
  enviarSolicitud(solicitud: SolicitudPersonal): Observable<{ success: boolean, message: string, data?: any }> {
    return this.httpclient.post<{ success: boolean, message: string, data?: any }>(`${this.apiUrl}/solicitud_personal/insertar`, solicitud);
  }

  getAllSolicitudes(): Observable<any[]> {
    return this.httpclient.get<any[]>(`${this.apiUrl}/solicitud_personal/resumen`);
  }

  aprobarSolicitud(id: number) {
    return this.httpclient.put<any>(`${this.apiUrl}/solicitud_personal/aprobar/${+id}`, {});
  }

  denegarSolicitud(id: number) {
    return this.httpclient.put<any>(`${this.apiUrl}/solicitud_personal/denegar/${+id}`, {});
  }
}
