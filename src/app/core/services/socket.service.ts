import { Injectable } from '@angular/core';
import { io, Socket } from 'socket.io-client';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SocketService {

  constructor() {

}
getServerSentEvent(url: string): Observable<any> {
  return new Observable<any>(obs => {
    const eventSource = new EventSource(url);
    eventSource.onmessage = event => {
      obs.next(JSON.parse(event.data));
    };
    eventSource.onerror = error => {
      obs.error(error);
    };
    return () => {
      eventSource.close();
    };
  });
}
}
