import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { DepartamentoComponent } from './pages/departamento/departamento.component';
import { DeptInformaticaComponent } from './pages/informatica/dept-informatica/dept-informatica.component';
import { BolsaHorasComponent } from './pages/informatica/bolsa-horas/bolsa-horas.component';
import { SolicitudesComponent } from './pages/informatica/solicitudes/solicitudes.component';
import { AvisoDesarrolloComponent } from './pages/aviso-desarrollo/aviso-desarrollo.component';
import { IncioInformaticaComponent } from './pages/informatica/incio-informatica/incio-informatica.component';
import { DeptComprasComponent } from './pages/compras/dept-compras/dept-compras.component';
import { InicioComprasComponent } from './pages/compras/inicio-compras/inicio-compras.component';
import { SolicitudesComprasComponent } from './pages/compras/solicitudes-compras/solicitudes-compras.component';
import { authGuard } from './core/guard/auth.guard';
import { rolCompras } from './core/guard/rolCompras.guard';
import { InicioComponent } from './pages/inicio/inicio.component';
import { DeptAdministracionComponent } from './pages/administracion/dept-administracion/dept-administracion.component';
import { InicioAdministracionComponent } from './pages/administracion/inicio-administracion/inicio-administracion.component';
import { SolicitudesAdministracionComponent } from './pages/administracion/solicitudes-administracion/solicitudes-administracion.component';
import { adminGuardGuard } from './core/guard/admin-guard.guard';
import { administracionGuardGuard } from './core/guard/administracion-guard.guard';
import { MuestrasDireccionTecnicaComponent } from './pages/solicitud-muestras/muestras-direccion-tecnica/muestras-direccion-tecnica.component';
import { MuestrasOficinaTecnicaComponent } from './pages/solicitud-muestras/muestras-oficina-tecnica/muestras-oficina-tecnica.component';
import { MuestrasCalidadComponent } from './pages/solicitud-muestras/muestras-calidad/muestras-calidad.component';
import { MuestrasLogisticaComponent } from './pages/solicitud-muestras/muestras-logistica/muestras-logistica.component';
export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'layout',
    component: LayoutComponent,
    canActivate: [authGuard],
    children: [
      {


        path: 'departamento',
        component: DepartamentoComponent,
        children: [
          {
            path:'inicio',
            component:InicioComponent

          },
          {
            path: 'dept-informatica',
            component: DeptInformaticaComponent,
            canActivate: [adminGuardGuard],

            children: [
              {
                path: 'inicio-informatica',
                component: IncioInformaticaComponent,
              },
              {
                path: 'bolsa-horas',
                component: BolsaHorasComponent,
              },
              {
                path: 'solicitudes',
                component: SolicitudesComponent,
              },
            ],
          },
          {
            path: 'aviso-desarrollo',
            component: AvisoDesarrolloComponent,
            canActivate: [adminGuardGuard],

          },
          {
            path: 'dept-compras',
            component: DeptComprasComponent,
            canActivate: [rolCompras],
            children: [
              {
                path: 'inicio-compras',
                component: InicioComprasComponent,
              },
              {
                path: 'solicitudes-compras',
                component: SolicitudesComprasComponent,
              },
            ],
          },
          {
            path: 'dept-administracion',
            component: DeptAdministracionComponent,
            canActivate: [administracionGuardGuard],
            children: [
             { path: 'inicio-administracion',
              component:InicioAdministracionComponent
             },
             {
              path: 'solicitudes-administracion',
              component: SolicitudesAdministracionComponent,
             }
            ],
          },
        ],


      },
      {
        path:'muestras',
        component: MuestrasOficinaTecnicaComponent,

      },
      {
        path:'muestras-calidad',
        component: MuestrasCalidadComponent,

      },

      {
        path:'muestras-direccion-tecnica',
        component: MuestrasDireccionTecnicaComponent,

      },
      {
        path: 'muestras-logistica',
        component: MuestrasLogisticaComponent
      },

    ],
  },
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
