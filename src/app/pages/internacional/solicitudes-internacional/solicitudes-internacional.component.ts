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
import { data } from 'jquery';


@Component({
  selector: 'app-solicitudes-internacional',
  standalone: true,
  imports: [ MatIconModule, MatPaginatorModule, MatSortModule, MatTableModule, MatInputModule, MatFormFieldModule, MatDividerModule, MatButtonModule, CommonModule, MatSelectModule, MatMenuModule, FormsModule, MatExpansionModule],
  templateUrl: './solicitudes-internacional.component.html',
  styleUrl: './solicitudes-internacional.component.css'
})
export class SolicitudesInternacionalComponent {

  solicitud?: string;
  tipo_solicitud?: string;
  fecha?: Date;
  estado?: string;
  prioridad?: string;
  descripcion?: string;
  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
   getCurrentDate(): string {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }
  formData = {

    solicitud: '',
    tipo_solicitud: '',
    fecha: this.getCurrentDate(),
    estado: 'En espera',
    prioridad: '',
    descripcion: '',
    id_departamento: '45'
  };
  displayedColumns: string[] = ['id_solicitud','solicitudes',  'fecha','tipo', 'estado','prioridad' ];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private SolicitudesServiceService: SolicitudesServiceService) {
  }
  dataSource: MatTableDataSource<any> = new MatTableDataSource<any>();

  ngOnInit(): void {
    this.getSolicitudes();
  }

  getSolicitudes() {
    const idDepartamento = 45; // Cambia esto según tu lógica para obtener el ID del departamento
    this.SolicitudesServiceService.getSolicitudesPorDepartamento(idDepartamento).subscribe(
      data => {
        this.dataSource.data = data;
      },
      error => {
        console.error('Error obteniendo solicitudes:', error);
      }
    );
  }







  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


  submitForm(form: NgForm) {
    const formData = {
      solicitud: this.solicitud,
      tipo_solicitud: this.tipo_solicitud,
      fecha: this.getCurrentDate(),
      estado: 'En espera',
      prioridad: this.prioridad,
      descripcion: this.descripcion,
      id_departamento: 45 // Cambia esto según tu lógica para obtener el ID del departamento
    };

    this.SolicitudesServiceService.postSolicitudCompras(formData).subscribe(data => {
      console.log('Solicitud enviada:', data);

      this.getSolicitudes();
      form.resetForm();
      window.location.reload(); // Recargar la página
    });
  }

  splitDescription(description: string): string {
    if (!description) {
      return ''; // Si la descripción es null o undefined, devuelve una cadena vacía
    }

    const maxLength = 20;
    let result = '';
    const words = description.split(' ');

    for (let i = 0; i < words.length; i++) {
      if ((result + ' ' + words[i]).length > maxLength) {
        result += '<br>' + words[i];
      } else {
        if (result.length > 0) {
          result += ' ';
        }
        result += words[i];
      }
    }

    return result;
  }
  selectedRow: any;

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
    toggleDetails() {
      this.selectedRow = null; // Esto oculta los detalles al hacer clic en "Ocultar Detalles"
    }
  }


/** Builds and returns a new User. */





