import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-inicio-produccion',
  standalone: true,
  imports: [CommonModule,MatCardModule],
  templateUrl: './inicio-produccion.component.html',
  styleUrl: './inicio-produccion.component.css'
})
export class InicioProduccionComponent {
  teamMembers = [
    { name: 'Ana Martínez', position: 'Directora de Producción', image: 'assets/miembro1.png' },
    { name: 'Carlos Sánchez', position: 'Supervisor de Línea de Producción', image: 'assets/miembro2.png' },
    { name: 'Elena Ruiz', position: 'Ingeniera de Procesos', image: 'assets/miembro3.png' },
    { name: 'Javier López', position: 'Coordinador de Control de Calidad', image: 'assets/miembro4.png' }
  ];
}
