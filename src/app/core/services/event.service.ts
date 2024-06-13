import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EventService {
  private apiUrl = 'http://localhost:3000/eventos/calendario'; // Cambia esto a la URL de tu API

  constructor(private http: HttpClient) {}

  getEvents(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  addEvent(event: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, event);
  }
}
