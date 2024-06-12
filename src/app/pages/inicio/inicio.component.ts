import { Component, ViewChild } from '@angular/core';

import {MatTabGroup, MatTabsModule} from '@angular/material/tabs';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import {MatButtonModule} from '@angular/material/button';

import { RouterLink } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { CarouselModule } from '@coreui/angular';
import { MatIcon } from '@angular/material/icon';


interface Circular {
  title: string;
  message: string;
  date: Date;
}
@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [RouterLink,MatTabsModule,ButtonModule,TagModule,CarouselModule,CommonModule,MatIcon,MatButtonModule],
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
