import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificacionService {

  private notificationsSource = new Subject<string>();
  notifications$ = this.notificationsSource.asObservable();

  constructor() { }

  addNotification(message: string): void {
    this.notificationsSource.next(message);
  }

  clearNotifications(): void {
    this.notificationsSource.next('');
  }
}
