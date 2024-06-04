export class Empleadomodelo
{

  id_usuario : number;
  nombre: string;
  numero_contacto: string;
  email: string;
  contrasena: string;
  rol: string;
  id_departamentos: number;

  constructor(id_usuario: number, nombre: string, numero_contacto: string, email: string, contrasena: string, rol: string, id_departamentos: number)
  {
    this.id_usuario = id_usuario;
    this.nombre = nombre;
    this.numero_contacto = numero_contacto;
    this.email = email;
    this.contrasena = contrasena;
    this.rol = rol;
    this.id_departamentos = id_departamentos;
  }


}
