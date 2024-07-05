import { Component, OnInit } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-inicio-rrhh',
  standalone: true,
  imports: [ MatIconModule, CommonModule],
  templateUrl: './inicio-rrhh.component.html',
  styleUrl: './inicio-rrhh.component.css'
})
export class InicioRrhhComponent implements OnInit{

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