
import { inject } from '@angular/core';
import { CanActivateFn,Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';


export const administracionGuardGuard: CanActivateFn = (route, state) => {
  const snackBar = inject(MatSnackBar);

  const router = inject(Router);
  const localData = localStorage.getItem('rol');

  if(localData == 'administracion' || localData == 'administrador'){
    return true;
  }else{

    snackBar.open('No tienes permisos para acceder a esta página.', 'Cerrar', {
      duration: 3000,
      panelClass: ['custom-snack-bar'],
      verticalPosition: 'top',
      horizontalPosition: 'center',
    });

    router.navigateByUrl('/layout/departamento/inicio');
    return false;
  }

};
