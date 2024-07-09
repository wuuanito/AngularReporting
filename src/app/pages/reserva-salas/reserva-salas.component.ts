import { CommonModule } from '@angular/common';
import { Component,AfterViewInit, QueryList, ViewChildren, ViewChild, OnInit,ChangeDetectionStrategy  } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core'; // useful for typechecking
import dayGridPlugin from '@fullcalendar/daygrid';


export interface ExampleTab {
  label: string;
  content: string;
}
@Component({
  selector: 'app-reserva-salas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reserva-salas.component.html',
  styleUrl: './reserva-salas.component.css'
})
export class ReservaSalasComponent  {
  
}