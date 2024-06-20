import { Injectable } from '@angular/core';
import io from 'socket.io-client';
import { environment } from '../../../enviroments/environment';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
  private socket: any;
  private apiUrl = environment.apiUrl;

  constructor() {
    this.socket = io(`${this.apiUrl}/`);
  }

  enviarMensaje(mensaje: string) {
    this.socket.emit('mensaje', mensaje);
  }

  recibirMensaje() {
    return this.socket.fromEvent('mensaje');
  }
}

