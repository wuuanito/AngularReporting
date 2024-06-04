import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-inicio-compras',
  standalone: true,
  imports: [ RouterLink, RouterOutlet, CommonModule],
  templateUrl: './inicio-compras.component.html',
  styleUrl: './inicio-compras.component.css'
})
export class InicioComprasComponent {

}
