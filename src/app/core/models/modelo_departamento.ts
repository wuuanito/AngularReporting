export class
DepartamentoModelo
{
  id_departamentos : number;
  nombre_departamentos: string;
  jefe_departamento: string;
  constructor(id_departamentos: number,jefe_departamento:string ,nombre_departamentos: string)
  {
    this.id_departamentos = id_departamentos;
    this.jefe_departamento = jefe_departamento;
    this.nombre_departamentos = nombre_departamentos;
  }
}
