import { CommonModule } from '@angular/common';
import { Component,AfterViewInit, QueryList, ViewChildren, ViewChild, OnInit } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormControl } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import {Observable, Observer} from 'rxjs';
import {MatTabsModule} from '@angular/material/tabs';
import {AsyncPipe} from '@angular/common';

export interface ExampleTab {
  label: string;
  content: string;
}
@Component({
  selector: 'app-reserva-salas',
  standalone: true,
  imports: [ CommonModule, MatDatepickerModule, MatInputModule, MatNativeDateModule, MatButtonModule,MatTabsModule, AsyncPipe ],
  templateUrl: './reserva-salas.component.html',
  styleUrl: './reserva-salas.component.css'
})
export class ReservaSalasComponent {
  asyncTabs: Observable<ExampleTab[]>;

  constructor() {
    this.asyncTabs = new Observable((observer: Observer<ExampleTab[]>) => {
      setTimeout(() => {
       observer.next([
          {label: 'Sala Project', content: ''},
          {label: 'Sala Gerencia', content: ''},
          {label: 'Sala Comun', content: ''},
        ]);
      }, 1000);
    });
  }
  
}
