import { MatIconModule } from '@angular/material/icon';
import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorIntl, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import html2canvas from 'html2canvas';
import * as jspdf from 'jspdf';
import 'jspdf-autotable';
import { MatMenuModule } from '@angular/material/menu';
import { SolicitudesServiceService } from '../../../core/services/solicitudes-service.service';
import { HostListener } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { map } from 'rxjs/operators';
import { MatExpansionModule } from '@angular/material/expansion';
import { Subscription } from 'rxjs';

import {  OnDestroy } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';




interface Departamento {
  id_departamentos: number;
  nombre_departamentos: string;
}



@Component({
  selector: 'app-solicitudes',
  standalone: true,
  imports: [
    MatIconModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    MatInputModule,
    MatFormFieldModule,
    MatDividerModule,
    MatButtonModule,
    CommonModule,
    MatSelectModule,
    MatMenuModule,
    FormsModule,
    MatExpansionModule,


  ],
  templateUrl: './solicitudes.component.html',
  styleUrls: ['./solicitudes.component.css']
})
export class SolicitudesComponent implements OnInit, OnDestroy{
  sseSubscription!: Subscription; // inicialización en el constructor

  formData = {
    id_solicitud: '', // inicializado en null
    solicitud: '',
    tipo_solicitud: '',
    fecha: this.getCurrentDate(), // Inicializando con la fecha actual
    estado: 'En espera',
    descripcion: '',
    id_departamento: '' // inicializado en null
  };
  selectedRow: any;

  dataSource: MatTableDataSource<any> = new MatTableDataSource<any>();
  displayedColumns: string[] = ['id_solicitud', 'departamento','solicitudes',  'fecha','tipo', 'estado','prioridad' ,'acciones'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private SolicitudesServiceService: SolicitudesServiceService,private _snackBar: MatSnackBar) { }
  departamentos: Departamento[] = [];

  ngOnInit() {
    this.loadData();
    this.getDepartamentos();
    this.sseSubscription = this.SolicitudesServiceService.subscribeToSSE().subscribe(
      data => {
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error => {
        console.error('Error en SSE:', error);
      }
    );

  }
  selectRow(row: any) {
    this.selectedRow = row;
    // Verifica si el estado del almacén está presente en la fila seleccionada
    if ('estado_almacen' in row) {
      this.selectedRow.estado_almacen = row.estado_almacen;
    } else {
      // Si no está presente, puedes asignar un valor predeterminado o dejarlo vacío según tu lógica
      this.selectedRow.estado_almacen = 'No disponible';
    }
  }

  loadData() {
    this.SolicitudesServiceService.getAllSolicitudes().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
  toggleDetails() {
    this.selectedRow = null; // Esto oculta los detalles al hacer clic en "Ocultar Detalles"
  }
  getCurrentDate(): string {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


 getRowClass(row: any) {
  switch (row.estado) {
    case 'En progreso':
      return 'row-yellow';
    case 'En espera':
      return 'row-red';
    case 'Completado':
      return 'row-green';
    default:
      return '';
  }
  }

  submitForm(form: NgForm) {
    this.SolicitudesServiceService.postSolicitud(this.formData).subscribe(data => {
      this.loadData();
      form.resetForm();
      window.location.reload(); // Recargar la página
    });
  }


  getDepartamentos() {
    this.SolicitudesServiceService.getDepartamentos().subscribe(
      (data: any[]) => {
console.log(data);
        this.departamentos = data;},

      (error) => {
        console.error('Error al obtener departamentos:', error);
      }
    );

  }
  changeState(row: any, newState: string) {
    // Inspeccionar el valor de row antes de llamar al servicio
    console.log('Row data:', row);

    if (row.id_solicitud === undefined) {
      console.error('Error: row.id_solicitud is undefined');
      return;
    }

    // Llamamos al método del servicio para actualizar el estado de la solicitud
    this.SolicitudesServiceService.updateEstadoSolicitud(row.id_solicitud, newState).subscribe(
      (data) => {
        console.log('Estado de solicitud actualizado:', data);

        // Actualizamos el estado en la fila
        row.estado = newState;

        // Recargar los datos después de actualizar el estado
        this.loadData();

        // Mostrar el mensaje de Snackbar
        this._snackBar.open('Estado de solicitud actualizado', 'Cerrar', {
          duration: 2000, // Duración del mensaje en milisegundos
        });
      },
      (error) => {
        console.error('Error al actualizar el estado de la solicitud:', error);
      }
    );
  }


  guardarCambios() {
    // Guardar los cambios en la base de datos
    this.dataSource.data.forEach((row: any) => {
      this.SolicitudesServiceService.updateEstadoSolicitud(row.id, row.estado).subscribe(
        (data) => {
          console.log('Estado de solicitud actualizado:', data);
          // Recargar los datos después de actualizar el estado
          this.loadData();
        },
        (error) => {
          console.error('Error al actualizar el estado de la solicitud:', error);
        }
      );
    });



  }
  ngOnDestroy(): void {
    if (this.sseSubscription) {
      this.sseSubscription.unsubscribe();
    }
  }
}


/** Builds and returns a new User. */


