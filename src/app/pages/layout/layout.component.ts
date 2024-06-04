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


@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet,RouterLink,MatButtonModule, MatMenuModule, MatIconModule,CommonModule, MatButtonModule, MatIconModule, MatMenuModule, CommonModule,FormsModule,MatInputModule,MatRippleModule,MatFormFieldModule,MatTooltipModule,MatSelectModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

  username: string | null = null;
 rol: string | null = null;
  isDropdownOpen: boolean = false;
  departamentList: DepartamentoModelo[] = [];
  dropdownOptions: { id: string, nombre: string }[] = [];

  showDivInicio: boolean = false;


  ngOnInit(): void {
    const userDataString = localStorage.getItem('ticketData');

    if (userDataString) {
      const userData = JSON.parse(userDataString);
      this.username = userData.user.nombre;
      this.rol = userData.user.rol;
    }
  }
  logout(): void {
    localStorage.removeItem('ticketData');
    localStorage.removeItem('idDepartamento');
    localStorage.removeItem('rol');


    this.router.navigateByUrl('/login');
  }
  loggedData: Empleadomodelo = new Empleadomodelo(0, '', '', '', '', '', 0);
  constructor(private router: Router,private sharedService: SharedService) {
    const localData = localStorage.getItem('ticketData');

    if (localData != null) {

      this.loggedData = JSON.parse(localData);
    }
}

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
}





