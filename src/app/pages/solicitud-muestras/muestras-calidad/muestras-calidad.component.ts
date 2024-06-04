import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MuestrasService } from '../../../core/services/muestras.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormsModule, NgForm } from '@angular/forms';
import { SharedService } from '../../../core/services/servicio-compartido.service';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCheckboxModule} from '@angular/material/checkbox';

import jsPDF from 'jspdf';

export interface UserData {
  id_muestras: string;
  solicitante: string;
  nombre_mp: string;
  proveedor: string;
  urgencia: string;
  fecha: string;
  estado: string;
  codigo_articulo: string;
  comentarios: string;
  estado_almacen?: string; // Definición opcional para estado_almacen
  hide?: number; // Definición opcional para hide
}

@Component({
  selector: 'app-muestras-calidad',
  standalone: true,
  imports: [ MatToolbarModule, MatPaginatorModule, MatSortModule, MatTableModule, MatInputModule, MatFormFieldModule, MatExpansionModule, MatIconModule, MatSelectModule, MatDividerModule, MatButtonModule, CommonModule, MatSelectModule, FormsModule, MatGridListModule,MatCheckboxModule],
  templateUrl: './muestras-calidad.component.html',
  styleUrl: './muestras-calidad.component.css'
})
export class MuestrasCalidadComponent {


  showDetails: boolean = true; // Controla la visibilidad de los detalles de la muestra

  displayedColumns: string[] = [
    'id_muestras', 'solicitante', 'nombre_mp',  'proveedor',
    'urgencia', 'fecha', 'estado', 'codigo_articulo', 'comentarios','almacen','crearAlmacen'
  ];
    expandedElement: UserData | null = null;

  username: string | null = null;
  formData: any;
  selectedRow: any;

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

  toggleSubRow(row: UserData) {
    this.selectedRow = this.selectedRow === row ? null : row;
  }
  toggleRow(row: any) {
    this.selectedRow = this.selectedRow === row ? null : row;
  }
  isExpansionDetailRow = (index: number, row: any) => this.selectedRow === row;

  constructor(private muestras: MuestrasService,private snackBar: MatSnackBar,private sharedService: SharedService) {
    const userDataString = localStorage.getItem('ticketData');
    if (userDataString) {
      const userData = JSON.parse(userDataString);
      this.username = userData.user.nombre;

      // Inicializa formData después de establecer el valor de username
      this.formData = {
        solicitante: this.username,
        nombre_mp: '',
        proveedor: '',
        urgencia: '',
        fecha: this.getCurrentDate(),
        estado: 'No iniciado',
        codigo_articulo: '',
        comentarios: '',

      };
    }
  }
  dataSource: MatTableDataSource<UserData> = new MatTableDataSource<UserData>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;



  ngOnInit() {
    this.getMuestrasOficinaTecnica();

  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
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
  toggleDetails() {
    this.selectedRow = null; // Esto oculta los detalles al hacer clic en "Ocultar Detalles"
  }
  getMuestrasOficinaTecnica() {
    this.muestras.getMuestras().subscribe(
      (data: UserData[]) => {
        // Asigna los datos recibidos al origen de datos de la tabla
        this.dataSource.data = data;
        // Asigna el paginador
        this.dataSource.paginator = this.paginator;
        // Asigna el ordenador de la tabla
        this.dataSource.sort = this.sort;
      },
      error => {
        // Muestra un mensaje emergente de error

        console.error('Error al obtener las muestras:', error); // Registra el error en la consola
      }
    );
  }
  agregarMuestra() {
    this.muestras.agregarMuestra(this.formData).subscribe(
      () => {
        // Éxito: muestra un mensaje de éxito
        this.snackBar.open('La muestra se ha agregado correctamente.', 'Cerrar', {
          duration: 3000,
          verticalPosition: 'top'
        });



      },
      error => {
        // Error: muestra un mensaje de error
        this.snackBar.open('Error al agregar la muestra. Por favor, inténtelo de nuevo más tarde.', 'Cerrar', {
          duration: 3000,
          verticalPosition: 'top'
        });
        console.error('Error al agregar la muestra:', error);
      }
    );
  }
  submitForm(form: NgForm) {
    this.formData.hide = 0;
    this.formData.estado_almacen = 'No se necesita';
    this.muestras.agregarMuestra(this.formData).subscribe(data => {
      this.snackBar.open('La muestra se ha agregado correctamente.', 'Cerrar', {
        duration: 3000,
        verticalPosition: 'top'
      });
    });
    window.location.reload();
  }
  downloadPDF() {
    if (!this.selectedRow) return;

    const doc = new jsPDF();
    const logo = '/assets/logo.png'; // Reemplaza con tu imagen en base64


    doc.addImage(logo, 'PNG', 10, 10, 60, 20); // x, y, width, height
    doc.setFontSize(20);
    doc.text(`SOLICITUD DE MUESTRAS `, 63, 40);



     // Detalles
     doc.setFontSize(12);
     const details = [
      ['ID', this.selectedRow.id_muestras],
      ['Solicitante', this.selectedRow.solicitante],
      ['Nombre MP', this.selectedRow.nombre_mp],
      ['Proveedor', this.selectedRow.proveedor],
      ['Urgencia', this.selectedRow.urgencia],
      ['Fecha', this.selectedRow.fecha],
      ['Estado', this.selectedRow.estado],
      ['Código Articulo', this.selectedRow.codigo_articulo],
      ['Comentarios', this.selectedRow.comentarios]
    ];

    (doc as any).autoTable({
      startY: 50,
      head: [['Campo', 'Detalle']],
      body: details,
      theme: 'grid',
      styles: {
        cellPadding: 3,
        fontSize: 10,
        valign: 'middle',
        halign: 'left'
      },
      headStyles: {
        fillColor: [22, 160, 133],
        textColor: [255, 255, 255],
        fontSize: 12
      },
      alternateRowStyles: {
        fillColor: [245, 245, 245]
      }
    });

    // Guardar el PDF
    doc.save('detalles.pdf');
  }
  openWarehouseRequestForm(): void {
    if (!this.selectedRow) {
      console.error('No se ha seleccionado ninguna fila');
      return;
    }

    const id = this.selectedRow.id_muestras; // Obtener el ID de la fila seleccionada
    const url = `/formulario_logistica?id=${id}`;
    const windowWidth = 700; // Ancho de la ventana emergente
    const windowHeight = 700; // Altura de la ventana emergente
    const windowFeatures = `resizable,scrollbars,status,width=${windowWidth},height=${windowHeight}`;

    // Calcular las coordenadas para centrar la ventana emergente en función del tamaño de la pantalla
    const screenWidth = window.screen.availWidth;
    const screenHeight = window.screen.availHeight;
    const left = (screenWidth - windowWidth) / 2;
    const top = (screenHeight - windowHeight) / 2;

    // Abrir la ventana emergente en el centro de la pantalla
    window.open(url, '_blank', `${windowFeatures},left=${left},top=${top}`);
  }

}
