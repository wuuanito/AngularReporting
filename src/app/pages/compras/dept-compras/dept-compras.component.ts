import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';

@Component({
  selector: 'app-dept-compras',
  standalone: true,
  imports: [ RouterLink, RouterOutlet, CommonModule,MatSidenavModule,MatListModule,MatIconModule,MatToolbarModule],
  templateUrl: './dept-compras.component.html',
  styleUrl: './dept-compras.component.css'
})
export class DeptComprasComponent {

  showTitle: boolean = true;

  hideTitle() {
    this.showTitle = false;
  }
  showTitles() {
    this.showTitle = true;
  }

}
