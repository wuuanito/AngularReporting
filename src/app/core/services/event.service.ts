import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../enviroments/environment';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private apiUrl = 'http://192.168.11.19:3000/eventos/calendario'; // Cambia esto a la URL de tu API

  constructor(private http: HttpClient) {}

  getEvents(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  addEvent(event: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, event);
  }
}
