import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';


@Component({
  selector: 'app-dept-compras',
  standalone: true,
  imports: [ RouterLink, RouterOutlet, CommonModule,MatMenuModule,MatToolbarModule,MatIconModule],
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
