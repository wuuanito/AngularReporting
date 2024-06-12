import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SolicitudPersonalService } from '../../../core/services/solicitud-personal.service';
import{ FormsModule } from '@angular/forms'; // Import FormsModule
@Component({
  selector: 'app-solicitudes-personal',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './solicitudes-personal.component.html',
  styleUrl: './solicitudes-personal.component.css'
})
export class SolicitudesPersonalComponent {


  data?: any[];
  filteredData?: any[];
  searchText: string = '';

  constructor(private dataService: SolicitudPersonalService) { }

  ngOnInit(): void {
    this.dataService.getAllSolicitudes().subscribe((data: any[]) => {
      this.data = data;
      this.filteredData = this.data;
    });
  }

  filterItem(item: any): boolean {
    if (!this.searchText) return true;
    return item.nombre_solicitante.toLowerCase().includes(this.searchText.toLowerCase());
  }

  filterStatus(status: string): void {
    if (!this.data) return; // Verificación para evitar errores de 'undefined'

    if (status === 'completed') {
      this.filteredData = this.data.filter(item => item.estado === 'aprobado');
    } else if (status === 'pending') {
      this.filteredData = this.data.filter(item => item.estado === 'pendiente');
    } else if (status === 'rejected') {
      this.filteredData = this.data.filter(item => item.estado === 'rechazado');

    }
    //Para mostrar da igual su condicion

    else if (status === 'all') {
      this.filteredData = this.data;
    }
     else {
      this.filteredData = this.data;
    }
  }
  aprobarSolicitud(id: number) {
    this.dataService.aprobarSolicitud(id)
      .subscribe(response => {
        console.log("Solicitud aprobada con ID:", id);
        // Realizar cualquier otra acción necesaria después de aprobar la solicitud

        window.location.reload();
      }, error => {
        console.error("Error al aprobar la solicitud:", error);
      });
  }

  denegarSolicitud(id: number) {
    this.dataService.denegarSolicitud(id)
      .subscribe(response => {
        console.log("Solicitud denegada con ID:", id);
        // Realizar cualquier otra acción necesaria después de denegar la solicitud

        window.location.reload();

      }, error => {
        console.error("Error al denegar la solicitud:", error);
      });
  }


}
