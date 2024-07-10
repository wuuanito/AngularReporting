import { Injectable } from '@angular/core';
import { Reservation } from '../models/reservation';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private reservations: Reservation[] = [];

  constructor() {}

  getReservations(): Observable<Reservation[]> {
    return of(this.reservations);
  }

  addReservation(reservation: Reservation): Observable<Reservation> {
    reservation.id = this.reservations.length + 1;
    this.reservations.push(reservation);
    return of(reservation);
  }
}