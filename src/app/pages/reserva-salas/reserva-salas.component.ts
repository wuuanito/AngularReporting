import { CommonModule } from '@angular/common';
import { Component,AfterViewInit, QueryList, ViewChildren, ViewChild, OnInit } from '@angular/core';
import {MatTabChangeEvent, MatTabsModule} from '@angular/material/tabs';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { ChangeDetectionStrategy } from '@angular/core';
import {  CalendarView } from 'angular-calendar';
import { startOfDay, endOfDay, lastDayOfISOWeekYear } from 'date-fns';
import { FullCalendarComponent, FullCalendarModule } from '@fullcalendar/angular';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid'; // Importa el plugin dayGrid
import timeGridPlugin from '@fullcalendar/timegrid'; // Importa el plugin timeGrid
import interactionPlugin from '@fullcalendar/interaction'; // Importa el plugin interaction
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
  imports: [ MatTabsModule,FullCalendarModule,CommonModule,CalendarModule ],
  templateUrl: './reserva-salas.component.html',
  styleUrl: './reserva-salas.component.css'
})
export class ReservaSalasComponent {
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    dateClick: this.handleDateClick.bind(this), // bind is important!
    events: [
      { title: 'event 1', date: '2019-04-01' },
      { title: 'event 2', date: '2019-04-02' }
    ]
  };

  handleDateClick(arg: { dateStr: string; }) {
    alert('date click! ' + arg.dateStr)
  }

}
