import { Component,OnInit  } from '@angular/core';
import { RouterLink } from '@angular/router';
import { EmpleadoService } from '../../core/services/empleado.service';
import { Observable } from 'rxjs';
import { Empleadomodelo } from '../../core/models/modelo_empleado';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-empleado',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './empleado.component.html',
  styleUrl: './empleado.component.css'
})
export class EmpleadoComponent {
  empleadoList: Empleadomodelo[] = [];

  constructor(private empleadoService: EmpleadoService) {



  }
  ngOnInit(): void {
    this.loadEmpleados();
  }
  loadEmpleados() {
    // Obtener el objeto ticketData del localStorage
    const ticketData = localStorage.getItem('ticketData');

    // Verificar si ticketData es null o no
    if (ticketData) {
      // Parsear ticketData para obtener el ID del departamento del usuario logueado
      const userId = JSON.parse(ticketData).user.id_departamentos;

      // Cargar los empleados del mismo departamento
      this.empleadoService.getEmpleadosPorDepartamento(userId).subscribe((res: Empleadomodelo[]) => {
        this.empleadoList = res;
        console.log('Lista de empleados del mismo departamento:', this.empleadoList);
      });
    } else {
      console.error('ticketData no encontrado en localStorage');
    }
  }










}
