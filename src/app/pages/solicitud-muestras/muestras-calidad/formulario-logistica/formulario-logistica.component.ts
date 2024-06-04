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
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormsModule, NgForm } from '@angular/forms';
import {MatGridListModule} from '@angular/material/grid-list';
import { FileService } from '../../../../core/services/file.service';
import { HttpClient } from '@angular/common/http';
import { MuestrasService } from '../../../../core/services/muestras.service';
import { ActivatedRoute, Route } from '@angular/router';
import { MatCardModule } from '@angular/material/card'; // Importar MatCardModule

@Component({
  selector: 'app-formulario-logistica',
  standalone: true,
  imports: [ MatToolbarModule, MatPaginatorModule, MatSortModule, MatTableModule, MatInputModule, MatFormFieldModule, MatExpansionModule, MatIconModule, MatSelectModule, MatDividerModule, MatButtonModule, CommonModule,MatCardModule, MatSelectModule, FormsModule, MatGridListModule],
  templateUrl: './formulario-logistica.component.html',
  styleUrl: './formulario-logistica.component.css'
})
export class FormularioLogisticaComponent {

  public id: string;

  private fileTmp: any;

  constructor(private restService : MuestrasService,private _snackBar: MatSnackBar, private route: ActivatedRoute){
    this.id = this.route.snapshot.queryParamMap.get('id') || '';

  }



  getFile($event: any): void {
    const file = $event.target.files[0];
    console.log(file);
    this,this.fileTmp={
      fileRaw: file,
      fileName: file.name
    }
  }

  sendFile(): void {
    // Mostrar alerta de confirmación
    if (window.confirm('¿Estás seguro de enviar el archivo?')) {
      const body = new FormData();
      body.append('file', this.fileTmp.fileRaw, this.fileTmp.fileName);
      body.append('id', this.id); // Añadir el ID al cuerpo de la solicitud

      this.restService.sendPost(body).subscribe({
        next: res => {
          console.log(res);
          // Mostrar snack de éxito
          this._snackBar.open('Archivo enviado exitosamente', 'Cerrar', {
            duration: 5000
          }).afterDismissed().subscribe(() => {
            window.close(); // Cerrar la ventana emergente
          });
        },
        error: err => {
          console.error(err);
          // Mostrar snack de error
          this._snackBar.open('Error al enviar el archivo', 'Cerrar', {
            duration: 5000
          });
        }
      });
    }
  }
}
