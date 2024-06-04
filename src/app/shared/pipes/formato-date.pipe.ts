import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'formatoDate',
  standalone: true
})
export class FormatoDatePipe implements PipeTransform {

  constructor(private datePipe: DatePipe) {}

  transform(value: any, formato: string = 'dd/MM/yyyy'): string {
    if (!value) return ''; // Si el valor es nulo, devolvemos una cadena vacía como valor predeterminado
    return this.datePipe.transform(value, formato) || ''; // Utilizamos DatePipe para formatear la fecha, si el resultado es nulo, devolvemos una cadena vacía
  }

}
