import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';

@Component({
  selector: 'app-dept-informatica',
  standalone: true,
  imports: [RouterLink,RouterOutlet,CommonModule,MatSidenavModule,MatListModule,MatToolbarModule],
  templateUrl: './dept-informatica.component.html',
  styleUrl: './dept-informatica.component.css'
})
export class DeptInformaticaComponent {

  showTitle: boolean = true;

  hideTitle() {
    this.showTitle = false;
  }
  showTitles() {
    this.showTitle = true;
  }

  isMobileMenuOpen = false;

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }
}
