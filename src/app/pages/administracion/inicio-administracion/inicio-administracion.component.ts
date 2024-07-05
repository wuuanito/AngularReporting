import { Component, OnInit } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-inicio-administracion',
  standalone: true,
  imports: [MatIconModule,CommonModule],
  templateUrl: './inicio-administracion.component.html',
  styleUrl: './inicio-administracion.component.css'
})
export class InicioAdministracionComponent implements OnInit{

  kpis = [
    { title: 'EN DESARROLLO', value: '', icon: '', trend: '', color: '#3949ab' },

  ];

  teamMembers = [
    { name: 'EN DESAROLLO', position: '', image: '' },

  ];

  recentActivities = [
    { action: 'EN DESAROLLO', date: '2024', user: '' },

  ];

  constructor() { }

  ngOnInit(): void { }
}