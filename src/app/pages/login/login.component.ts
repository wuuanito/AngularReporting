import { Component } from '@angular/core';
import { LoginModel } from '../../core/models/modelo_login';
import { FormsModule } from '@angular/forms';
import { EmpleadoService } from '../../core/services/empleado.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginObj: LoginModel = new LoginModel('', ''); 

constructor(private empleadoService: EmpleadoService,private router:Router) { }

onLogin() {
  this.empleadoService.login(this.loginObj).subscribe(
    (res: any) => {
      console.log('Desde el layout:', res);
      if (res.accessToken && res.user) {
        alert('Login exitoso');

        localStorage.setItem('ticketData', JSON.stringify(res));

        localStorage.setItem('idDepartamento', res.user.id_departamento);
        localStorage.setItem('rol', res.user.rol);
        console.log('Desde el layout:', res.user.rol);
        console.log('Desde el layout:', res.user.id_departamento);

        this.router.navigateByUrl('/layout/departamento/inicio');
      } else {
        console.error('Token de acceso o usuario no recibido en la respuesta del backend');
      }
    },
    (error: any) => {
      console.error(error);
      alert('Error al iniciar sesión. Por favor, inténtalo de nuevo.\nSi el problema persiste, contacta al administrador del sistema.');
    }
  );
}





}
