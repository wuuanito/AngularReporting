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
import jsPDF from 'jspdf';

export interface UserData {
  id_solicitud_muestras: string;
  solicitante: string;
  comentario: string;
  lote: string;
  fecha: string;
  estado: string;
}



@Component({
  selector: 'app-muestras-oficina-tecnica',
  standalone: true,
  imports: [ MatToolbarModule, MatPaginatorModule, MatSortModule, MatTableModule, MatInputModule, MatFormFieldModule, MatExpansionModule, MatIconModule, MatSelectModule, MatDividerModule, MatButtonModule, CommonModule, MatSelectModule, FormsModule, MatGridListModule],
  templateUrl: './muestras-oficina-tecnica.component.html',
  styleUrl: './muestras-oficina-tecnica.component.css'
})
export class MuestrasOficinaTecnicaComponent implements AfterViewInit {
  showDetails: boolean = true; // Controla la visibilidad de los detalles de la muestra

  displayedColumns: string[] = [
    'idsolicitud_muestras', 'solicitante','nombre','cod_producto', 'lote', 'fecha','estado'
  ];

    expandedElement: UserData | null = null;

  username: string | null = null;
  formData: any;
  selectedRow: any;

  selectRow(row: any) {
    if (this.selectedRow === row) {
      this.selectedRow = null; // Si la fila ya está seleccionada, deseleccionarla
    } else {
      this.selectedRow = row; // Si la fila no está seleccionada, seleccionarla
    }
  }



  toggleSubRow(row: UserData) {
    this.selectedRow = this.selectedRow === row ? null : row;
  }

  toggleRow(row: any): void {
    this.selectedRow = this.selectedRow === row ? null : row;
  }
  isSelected(row: any): boolean {
    return this.selectedRow === row;
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
        nombre:'',
        cod_producto:'',
        lote:'',
        fecha: this.getCurrentDate(),
        estado: 'Pendiente',
        comentario: '',
        hide: 0,
        departamento:''


      };
    }
  }
  dataSource: MatTableDataSource<UserData> = new MatTableDataSource<UserData>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;



  ngOnInit() {
    this.getMuestras();

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

  getMuestras() {
    this.muestras.getSolicitudMuestras().subscribe(
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
          verticalPosition: 'top',

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
      window.location.reload();

    });
  }
  downloadPDF() {
    if (!this.selectedRow) return;

    const doc = new jsPDF();
    const logo = '/assets/logo.png'; // Reemplaza con tu imagen en base64

    const fileName = 'Solicitud Muestra Nº ' + this.selectedRow.idsolicitud_muestras + '.pdf';

    doc.addImage(logo, 'PNG', 10, 10, 60, 20); // x, y, width, height
    doc.setFontSize(20);
    doc.text(`SOLICITUD DE MUESTRAS `, 63, 40);



     // Detalles
     doc.setFontSize(12);
     const details = [
      ['ID', this.selectedRow.idsolicitud_muestras],
      ['SOLICITANTE', this.selectedRow.solicitante],
      ['NOMBRE ', this.selectedRow.nombre],
      ['CODIGO PRODUCTO', this.selectedRow.cod_producto],
      ['LOTE', this.selectedRow.lote],
      ['FECHA', this.selectedRow.fecha],
      ['ESTADO', this.selectedRow.estado],
      ['COMENTARIOS', this.selectedRow.comentario]
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
    doc.save(fileName);
  }
}
