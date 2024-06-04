import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dept-compras',
  standalone: true,
  imports: [ RouterLink, RouterOutlet, CommonModule],
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
