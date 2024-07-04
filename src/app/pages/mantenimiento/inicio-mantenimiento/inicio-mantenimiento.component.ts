import { Component, OnInit } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-inicio-mantenimiento',
  standalone: true,
  imports: [ MatIconModule, CommonModule],
  templateUrl: './inicio-mantenimiento.component.html',
  styleUrl: './inicio-mantenimiento.component.css'
})
export class InicioMantenimientoComponent implements OnInit{

  kpis = [
    { title: 'Presupuesto Anual', value: '€10M', icon: 'monetization_on', trend: '+5%', color: '#3949ab' },
    { title: 'Proyectos Activos', value: '15', icon: 'assignment', trend: '+2', color: '#1e88e5' },
    { title: 'Eficiencia Operativa', value: '92%', icon: 'trending_up', trend: '+3%', color: '#43a047' },
    { title: 'Satisfacción del Equipo', value: '4.8/5', icon: 'sentiment_very_satisfied', trend: '+0.2', color: '#5e35b1' }
  ];

  teamMembers = [
    { name: 'Juan Pérez', position: 'Director de Finanzas', image: 'assets/miembro1.png' },
    { name: 'Ana Martínez', position: 'Gerente de Operaciones', image: 'assets/miembro2.png' },
    { name: 'Carlos López', position: 'Analista Financiero', image: 'assets/miembro3.png' },
    { name: 'María González', position: 'Coordinadora de Proyectos', image: 'assets/miembro4.png' }
  ];

  recentActivities = [
    { action: 'Informe financiero completado', date: '2024-07-01', user: 'Juan Pérez' },
    { action: 'Nuevo proyecto iniciado', date: '2024-06-28', user: 'Ana Martínez' },
    { action: 'Revisión de presupuesto', date: '2024-06-25', user: 'Carlos López' },
    { action: 'Nuevo proyecto iniciado', date: '2024-06-28', user: 'Ana Martínez' },
    { action: 'Revisión de presupuesto', date: '2024-06-25', user: 'Carlos López' },
    { action: 'Nuevo proyecto iniciado', date: '2024-06-28', user: 'Ana Martínez' },
    { action: 'Revisión de presupuesto', date: '2024-06-25', user: 'Carlos López' },
    { action: 'Reunión de equipo', date: '2024-06-22', user: 'María González' }
  ];

  constructor() { }

  ngOnInit(): void { }
}