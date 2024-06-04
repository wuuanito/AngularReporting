import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dept-informatica',
  standalone: true,
  imports: [RouterLink,RouterOutlet,CommonModule],
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

}
