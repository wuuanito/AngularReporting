import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dept-administracion',
  standalone: true,
  imports: [RouterLink, RouterOutlet,MatListModule,MatToolbarModule,MatIconModule,MatSidenavModule,CommonModule],
  templateUrl: './dept-administracion.component.html',
  styleUrl: './dept-administracion.component.css'
})
export class DeptAdministracionComponent {
  navbarOpen = false;

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
}