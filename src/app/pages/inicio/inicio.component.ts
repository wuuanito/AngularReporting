import { Component, ViewChild } from '@angular/core';
import { FullCalendarModule } from '@fullcalendar/angular';
import { CalendarOptions } from '@fullcalendar/core';
import {MatTabGroup, MatTabsModule} from '@angular/material/tabs';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import {MatButtonModule} from '@angular/material/button';

import { RouterLink } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { CarouselModule } from '@coreui/angular';
import { MatIcon } from '@angular/material/icon';

import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
interface Circular {
  title: string;
  message: string;
  date: Date;
}
@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [FullCalendarModule,RouterLink,MatTabsModule,ButtonModule,TagModule,CarouselModule,CommonModule,MatIcon,MatButtonModule],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
  isAdmin!: boolean // Esto podría ser establecido de acuerdo al rol del usuario

  circulars: Circular[] = [
    { title: 'HOY NO SE PUEDE APARCAR', message: 'Mensaje de la circular 1', date: new Date() },
    { title: 'Circular 2', message: 'Mensaje de la circular 2', date: new Date() },
    { title: 'Circular 3', message: 'Mensaje de la circular 3', date: new Date() },
  ];
  currentIndex: number = 0;

  constructor() {     this.checkUserRole();
  }
  username: string | null = null;
  rol: string | null = null;
  ngOnInit(): void {  const userDataString = localStorage.getItem('ticketData');

  if (userDataString) {
    const userData = JSON.parse(userDataString);
    this.username = userData.user.nombre;
    this.rol = userData.user.rol;
  } }

  previous(): void {
    this.currentIndex = (this.currentIndex === 0) ? this.circulars.length - 1 : this.currentIndex - 1;
  }

  next(): void {
    this.currentIndex = (this.currentIndex === this.circulars.length - 1) ? 0 : this.currentIndex + 1;
  }
  @ViewChild('tabGroup') tabGroup!: MatTabGroup;

  calendarOptions1: CalendarOptions = {
    plugins: [dayGridPlugin, interactionPlugin],
    initialView: 'dayGridMonth',
    events: [
      { title: 'Evento de Reunión 1', date: '2024-06-01' },
      { title: 'Evento de Reunión 1-2', date: '2024-06-10' }
    ]
  };


  calendarOptions2: CalendarOptions = {
    plugins: [dayGridPlugin, interactionPlugin],
    initialView: 'dayGridMonth',
    events: [
      { title: 'Evento de Reunión 2', date: '2024-06-05' },
      { title: 'Evento de Reunión 2-2', date: '2024-06-15' }
    ]
  };

  calendarOptions3: CalendarOptions = {
    plugins: [dayGridPlugin, interactionPlugin],
    initialView: 'dayGridMonth',
    events: [
      { title: 'Evento de Gerencia', date: '2024-06-20' },
      { title: 'Evento de Gerencia 2', date: '2024-06-25' }
    ]
  };

  ngAfterViewInit() {
    this.tabGroup.selectedTabChange.subscribe(() => {
      setTimeout(() => {
        window.dispatchEvent(new Event('resize'));
      }, 0);
    });
  }

  agregarCircular() {
    // Aquí puedes implementar la lógica para agregar una nueva circular
    console.log('Agregar circular');
  }

  getUserRole(): string | null {
    const localData = localStorage.getItem('ticketData');
    if (localData !== null) {
      const userData = JSON.parse(localData);

      return userData.user.rol;

    }
    return null;
  }

  checkUserRole() {
    const userRole = this.getUserRole();

    // Verificar si el rol del usuario es "admin"
    this.isAdmin = userRole === 'administrador';
  }
}
