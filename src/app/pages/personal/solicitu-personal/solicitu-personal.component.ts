import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators  } from '@angular/forms';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import {MatCheckboxModule} from '@angular/material/checkbox';
import { SolicitudPersonalService } from '../../../core/services/solicitud-personal.service';
import { NgForm } from '@angular/forms';


export interface SolicitudPersonal {
  nombre_solicitante: string;
  candidatos: number;
  practicas: string;
  departamento: string;
  fecha: Date;
  experiencia: string;
  justificacion: string;
  notas?: string;
}

@Component({
  selector: 'app-solicitu-personal',
  standalone: true,
  imports: [FormsModule,MatCheckboxModule],
  templateUrl: './solicitu-personal.component.html',
  styleUrl: './solicitu-personal.component.css'
})
export class SolicituPersonalComponent  {

  model: SolicitudPersonal = {
    nombre_solicitante: '',
    candidatos: 0,
    practicas: '',
    departamento: '',
    fecha: new Date(),
    experiencia: '',
    justificacion: '',
    notas: ''
  };


  constructor(private solicitudPersonalService: SolicitudPersonalService) {}

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.solicitudPersonalService.enviarSolicitud(this.model).subscribe(
        (response: { success: boolean, message: string, data?: any }) => {
          console.log('Solicitud enviada exitosamente', response);
          window.location.reload();

        },
        (error: any) => {
          console.error('Error al enviar la solicitud', error);
        }
      );
    }
  }
}
