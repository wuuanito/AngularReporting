import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmpleadoService } from './core/services/empleado.service';
import { DepartamentoService } from './core/services/departamento.service';
import { SharedService } from './core/services/servicio-compartido.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { ProveedoresService } from './core/services/proveedores.service';
import{MatInputModule} from '@angular/material/input';
import{MatDatepickerModule} from '@angular/material/datepicker';
import 'flowbite';
import { BolsaHorasService } from './core/services/bolsa-horas.service';
import { FormBuilder } from '@angular/forms';
import { IgxGridModule } from 'igniteui-angular';
import { MatTableDataSource } from '@angular/material/table';
import { SolicitudesServiceService } from './core/services/solicitudes-service.service';
import { WebSocketService } from './core/services/web-socket.service';
import { Socket } from 'socket.io-client';

import { HttpClient } from '@angular/common/http';
import { bootstrapApplication } from '@angular/platform-browser';
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';





@Component({
  selector: 'app-root',
  standalone: true,
  imports: [IgxGridModule,FullCalendarModule,RouterOutlet,HttpClientModule,MatSnackBarModule,MatButtonModule, MatMenuModule, MatIconModule,CommonModule,MatButtonModule,MatDatepickerModule,MatInputModule],
  providers: [EmpleadoService,DepartamentoService,SharedService,ProveedoresService,BolsaHorasService,SolicitudesServiceService,WebSocketService,HttpClientModule,HttpClient,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',

})
export class AppComponent {
  title = 'ReportesFront';
}
