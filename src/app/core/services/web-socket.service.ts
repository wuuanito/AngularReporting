import { Injectable } from '@angular/core';
import io from 'socket.io-client';
import { environment } from '../../../config';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
  private socket: any;

  constructor() {
    this.socket = io("http://localhost:3000/" );
  }

  enviarMensaje(mensaje: string) {
    this.socket.emit('mensaje', mensaje);
  }

  recibirMensaje() {
    return this.socket.fromEvent('mensaje');
  }
}

