import { Component, OnInit } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-incio-oficina-tecnica',
  standalone: true,
  imports: [ MatIconModule, CommonModule],
  templateUrl: './incio-oficina-tecnica.component.html',
  styleUrl: './incio-oficina-tecnica.component.css'
})
export class IncioOficinaTecnicaComponent implements OnInit{

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