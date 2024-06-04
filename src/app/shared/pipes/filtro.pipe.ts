import { Pipe, PipeTransform } from '@angular/core';
import { DepartamentoModelo } from '../../core/models/modelo_departamento';

@Pipe({
  name: 'filtroDepartamentos',
  standalone: true
})
export class FiltroDepartamentosPipe implements PipeTransform {
  transform(departamentos: DepartamentoModelo[] | null, criterio: string, otroCriterio: string): DepartamentoModelo[] | null {
    if (!departamentos || (!criterio && !otroCriterio)) {
      return departamentos;
    }

    criterio = criterio ? criterio.toLowerCase() : '';
    otroCriterio = otroCriterio ? otroCriterio.toLowerCase() : '';

    return departamentos.filter(dept =>
      dept.nombre_departamentos.toLowerCase().includes(criterio)     );
  }
}

