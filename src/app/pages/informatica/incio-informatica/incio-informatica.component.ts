import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';



@Component({
  selector: 'app-incio-informatica',
  standalone: true,
  imports: [CommonModule,MatIcon,MatTableModule],
  templateUrl: './incio-informatica.component.html',
  styleUrl: './incio-informatica.component.css'
})
export class IncioInformaticaComponent {

  solicitudesRecientes = [
    { titulo: 'Instalación de Software', fecha: new Date('2024-05-01') },
    { titulo: 'Configuración de Red', fecha: new Date('2024-05-03') },
    { titulo: 'Actualización de Sistema Operativo', fecha: new Date('2024-05-05') }
  ];

  solicitudesAtencion = [
    { titulo: 'Problema de Seguridad', prioridad: 'alta' },
    { titulo: 'Error en Base de Datos', prioridad: 'media' },
    { titulo: 'Solicitud de Licencia de Software', prioridad: 'baja' }
  ];



  dialogOpen: boolean = false;
  dialogSolicitud: any = null;

  mostrarDetalles(solicitud: any) {
    this.dialogSolicitud = solicitud;
    this.dialogOpen = true;
  }

  cerrarDialogo() {
    this.dialogOpen = false;
    this.dialogSolicitud = null;
  }


}
