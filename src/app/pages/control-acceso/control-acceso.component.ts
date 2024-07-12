import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
interface AccessEntry {
  fecha: string;
  nombreApellidos: string;
  empresa: string;
  horaEntrada: string;
  horaSalida: string;
  personalAutoriza: string;
}
@Component({
  selector: 'app-control-acceso',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './control-acceso.component.html',
  styleUrl: './control-acceso.component.css'
})
export class ControlAccesoComponent {
  entries: AccessEntry[] = [];

  addEntry() {
    this.entries.push({
      fecha: '',
      nombreApellidos: '',
      empresa: '',
      horaEntrada: '',
      horaSalida: '',
      personalAutoriza: ''
    });
  }
}
