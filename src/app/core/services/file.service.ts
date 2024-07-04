import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FileService {
  private apiUrl = environment.apiUrl;

  private baseUrl = `${this.apiUrl}/fileroutes`;

  constructor(private http: HttpClient) { }

  uploadFile(formData: FormData): Observable<any> {
    return this.http.post(`${this.baseUrl}/upload`, formData);
  }

  downloadFile(filename: string): Observable<Blob> {
    return this.http.get(`${this.baseUrl}/download/${filename}`, { responseType: 'blob' });
  }
}
