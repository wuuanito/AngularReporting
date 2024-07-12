import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { Empleadomodelo } from '../../core/models/modelo_empleado';
import {  EventEmitter, Input, Output } from "@angular/core";
import { SharedService } from '../../core/services/servicio-compartido.service';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { DepartamentoModelo } from '../../core/models/modelo_departamento';
import { DepartamentoService } from '../../core/services/departamento.service';
import { Modal } from 'flowbite'
import type { ModalOptions, ModalInterface } from 'flowbite'
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {MatInputModule} from '@angular/material/input';
import {MatRippleModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
import { NotificacionService } from '../../core/services/notificacion.service';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import { trigger, state, style, animate, transition } from '@angular/animations';
import {MatExpansionModule} from '@angular/material/expansion';


@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [MatExpansionModule,MatToolbarModule,RouterOutlet,RouterLink,MatButtonModule, MatMenuModule, MatIconModule,CommonModule, MatButtonModule, MatIconModule, MatMenuModule, CommonModule,FormsModule,MatInputModule,MatRippleModule,MatFormFieldModule,MatTooltipModule,MatSelectModule,MatSidenavModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
  animations: [ trigger('desplegar', [
      state('visible', style({
        height: '*',
        opacity: 1,
        overflow: 'hidden',
      })),
      state('invisible', style({
        height: '0',
        opacity: 0,
        overflow: 'hidden',
      })),
      transition('visible <=> invisible', [
        animate('300ms ease-in-out'),
      ]),
    ])
  ]
})
export class LayoutComponent {
  notifications: string[] = [];

  username: string | null = null;
 rol: string | null = null;
  isDropdownOpen: boolean = false;
  departamentList: DepartamentoModelo[] = [];
  dropdownOptions: { id: string, nombre: string }[] = [];

  showDivInicio: boolean = false;

  constructor(private router: Router,private sharedService: SharedService,private notificacionService : NotificacionService) {
    const localData = localStorage.getItem('ticketData');

    if (localData != null) {

      this.loggedData = JSON.parse(localData);
    }
}
mostrarDepartamentos: boolean = false;
departamentosAbiertos = false;

  toggleDepartamentos() {
    this.departamentosAbiertos = !this.departamentosAbiertos;
  }

  solicitudesAbiertas = false;

  toggleSolicitudes() {
    this.solicitudesAbiertas = !this.solicitudesAbiertas;
  }
  ngOnInit(): void {
    const userDataString = localStorage.getItem('ticketData');

    if (userDataString) {
      const userData = JSON.parse(userDataString);
      this.username = userData.user.nombre;
      this.rol = userData.user.rol;
      this.notificacionService.notifications$.subscribe(notification => {
        this.notifications.push(notification);
      });
    }
    
  }
  logout(): void {
    localStorage.removeItem('ticketData');
    localStorage.removeItem('idDepartamento');
    localStorage.removeItem('rol');


    this.router.navigateByUrl('/login');
  }

  clearNotifications(): void {
    this.notifications = [];
    this.notificacionService.clearNotifications();
  }
  loggedData: Empleadomodelo = new Empleadomodelo(0, '', '', '', '', '', 0);


getUserRole(): string | null {
  const localData = localStorage.getItem('ticketData');
  if (localData !== null) {
    const userData = JSON.parse(localData);
    return userData.user.rol;
  }
  return null;
}

isUserRole(role: string): boolean {
  const userRole = this.getUserRole();
  return userRole !== null && userRole === role;
}
updateDropdownOptions() {
  this.dropdownOptions = [];
  this.departamentList.forEach((dept: any) => {
    this.dropdownOptions.push({
      id: dept.id_departamentos,
      nombre: dept.nombre_departamentos
    });
  });
}

toggleDropdown() {
  this.isDropdownOpen = !this.isDropdownOpen;
}
navigateToDeptInformatica() {
  this.router.navigate(['/departamento/dept-informatica']);
}




toggleDivRouter() {

  this.showDivInicio = false;
}

showInicio() {
  this.showDivInicio = true;
}


showNotificationsPanel: boolean = false;

toggleNotificationsPanel(): void {
  this.showNotificationsPanel = !this.showNotificationsPanel;
}




}





