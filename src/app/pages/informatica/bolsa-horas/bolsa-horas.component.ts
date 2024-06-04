import { Component, OnInit } from '@angular/core';
import { ProveedoresService } from '../../../core/services/proveedores.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import{MatButtonModule} from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BolsaHorasService } from '../../../core/services/bolsa-horas.service';

import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-bolsa-horas',
  standalone: true,
  imports: [MatDatepickerModule, MatNativeDateModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatOptionModule, CommonModule,MatIconModule, MatCardModule, MatButtonModule, MatExpansionModule, MatSlideToggleModule, FormsModule, ReactiveFormsModule],
  templateUrl: './bolsa-horas.component.html',
  styleUrls: ['./bolsa-horas.component.css']
})
export class BolsaHorasComponent implements OnInit {

  panelOpenState = false;
  proveedorSeleccionado: string;
  fecha: string;
  numHoras: number;
  descripcion: string;



  proveedores: any[] = []; // Asumiendo que proveedores es un arreglo en tu componente

  constructor(private proveedoresService: ProveedoresService, private horasService: BolsaHorasService,private snackBar: MatSnackBar) {
    this.proveedorSeleccionado = '';
    this.fecha = '';
    this.numHoras = 0;
    this.descripcion = '';
  }
  proveedoresSeleccionados: {[key: string]: string} = {}; // Objeto para mantener el proveedor seleccionado por id


  ngOnInit(): void {
    this.loadProveedores();
  }



  loadProveedores(): void {
    this.proveedoresService.getAllProveedores().subscribe((proveedores: any[]) => {
      this.proveedores = proveedores.map(proveedor => ({
        ...proveedor,
        showForm: false,
        sumatorioHoras: 0
      }));

      this.proveedores.forEach(proveedor => {
        this.proveedoresService.getAllServicios(proveedor.id_proveedores).subscribe((servicios: any[]) => {
          proveedor.servicios = servicios;
          this.getSumatorioHoras(proveedor.id_proveedores);
        });
      });
    });
  }

  getSumatorioHoras(id_proveedor: number): void {
    this.proveedoresService.getSumatorioHoras(id_proveedor).subscribe((sumatorioHoras: number | any) => {
      const proveedor = this.proveedores.find(p => p.id_proveedores === id_proveedor);
      if (typeof sumatorioHoras === 'number') {
        proveedor.sumatorioHoras = sumatorioHoras;
      } else if (sumatorioHoras && typeof sumatorioHoras.sumatorio === 'string') {
        proveedor.sumatorioHoras = parseInt(sumatorioHoras.sumatorio, 10);
      } else {
        console.error('Unexpected sumatorioHoras format:', sumatorioHoras);
      }
    });
  }

  toggleForm(proveedor: any): void {
    proveedor.showForm = !proveedor.showForm;
  }

  recogerOtrosCampos(): {fecha: string, numHoras: number, descripcion: string} {
    return {
      fecha: this.fecha,
      numHoras: this.numHoras,
      descripcion: this.descripcion
    };
  }


  guardarDatos(idProveedor: number): void {
    const { fecha, numHoras, descripcion } = this.recogerOtrosCampos();

    console.log("ID del Proveedor Seleccionado:", idProveedor);
    console.log("Fecha:", fecha);
    console.log("Número de Horas:", numHoras);
    console.log("Descripción:", descripcion);


    this.horasService.guardarDatos(idProveedor, fecha, numHoras, descripcion).subscribe((response: any) => {
      console.log('Datos guardados correctamente:', response);
      location.reload();

    }, (error: any) => {
      console.error('Error al guardar los datos:', error);
    });

  }

  toggleHide(idProveedor: number, checked: boolean) {
    const hideValue = checked ? 1 : 0;
    this.horasService.ocultarHoras(idProveedor).subscribe(
      (response) => {
        console.log('Estado actualizado en la base de datos:', response);
        this.snackBar.open('Horas contabilizadas correctamente', 'Cerrar', {
          duration: 2000, // Duración del Snackbar en milisegundos
        });
        // Recargar la página después de 2 segundos
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      },
      (error) => {
        console.error('Error al actualizar el estado en la base de datos:', error);
        this.snackBar.open('Error al contabilizar horas', 'Cerrar', {
          duration: 2000, // Duración del Snackbar en milisegundos
        });
      }
    );
  }

}
