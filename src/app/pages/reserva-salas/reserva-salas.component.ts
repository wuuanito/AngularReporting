import { CommonModule } from '@angular/common';
import { Component,AfterViewInit, QueryList, ViewChildren, ViewChild, OnInit } from '@angular/core';
import {MatTabChangeEvent, MatTabsModule} from '@angular/material/tabs';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { ChangeDetectionStrategy } from '@angular/core';
import {  CalendarView } from 'angular-calendar';
import { startOfDay, endOfDay, lastDayOfISOWeekYear } from 'date-fns';
// Importa el plugin interaction
import * as moment from 'moment';
import { MatCalendar } from '@angular/material/datepicker';

interface CalendarEvent {
  id: number;
  start: Date;
  end: Date;
  title: string;
  room: string;
  customer: string;
}
@Component({
  selector: 'app-reserva-salas',
  standalone: true,
  imports: [ MatTabsModule,CommonModule,CalendarModule ],
  templateUrl: './reserva-salas.component.html',
  styleUrl: './reserva-salas.component.css'
})
export class ReservaSalasComponent {


}
