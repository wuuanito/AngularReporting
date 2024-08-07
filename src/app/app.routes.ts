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
import { ReservaSalasComponent } from './pages/reserva-salas/reserva-salas.component';
import { TomaMuestrasComponent } from './pages/laboratorio/toma-muestras/toma-muestras.component';
import { SolicituPersonalComponent } from './pages/personal/solicitu-personal/solicitu-personal.component';
import { PersonalComponent } from './pages/personal/personal.component';
import { SolicitudesPersonalComponent } from './pages/personal/solicitudes-personal/solicitudes-personal.component';
import { personalGuard } from './core/guard/personal.guard';
import { LaboratorioComponent } from './pages/laboratorio/laboratorio/laboratorio.component';
import { DeptProduccionComponent } from './pages/produccion/dept-produccion/dept-produccion.component';
import { DeptRrhhComponent } from './pages/rrhh/dept-rrhh/dept-rrhh.component';
import { OficinaTecnicaComponent } from './pages/oficina-tecnica/oficina-tecnica/oficina-tecnica.component';
import { DeptMantenimientoComponent } from './pages/mantenimiento/dept-mantenimiento/dept-mantenimiento.component';
import { GerenciaComponent } from './pages/gerencia/gerencia/gerencia.component';
import { InicioLaboratorioComponent } from './pages/laboratorio/inicio-laboratorio/inicio-laboratorio.component';
import { InicioProduccionComponent } from './pages/produccion/inicio-produccion/inicio-produccion.component';
import { IncioOficinaTecnicaComponent } from './pages/oficina-tecnica/incio-oficina-tecnica/incio-oficina-tecnica.component';
import { InicioRrhhComponent } from './pages/rrhh/inicio-rrhh/inicio-rrhh.component';
import { InicioMantenimientoComponent } from './pages/mantenimiento/inicio-mantenimiento/inicio-mantenimiento.component';
import { InicioGerenciaComponent } from './pages/gerencia/inicio-gerencia/inicio-gerencia.component';
import { rolLaboratorioGuard } from './core/guard/rol-laboratorio.guard';
import { rolProduccionGuard } from './core/guard/rol-produccion.guard';
import { rolRrhhGuard } from './core/guard/rol-rrhh.guard';
import { rolOficinaTecnicaGuard } from './core/guard/rol-oficina-tecnica.guard';
import { rolMantenimientoGuard } from './core/guard/rol-mantenimiento.guard';
import { rolGerenciaGuard } from './core/guard/rol-gerencia.guard';
import { SolicitudesGerenciaComponent } from './pages/gerencia/solicitudes-gerencia/solicitudes-gerencia.component';
import { SolicitudesLaboratorioComponent } from './pages/laboratorio/solicitudes-laboratorio/solicitudes-laboratorio.component';
import { SolicitudesProduccionComponent } from './pages/produccion/solicitudes-produccion/solicitudes-produccion.component';
import { SolicitudesOficinaTecnicaComponent } from './pages/oficina-tecnica/solicitudes-oficina-tecnica/solicitudes-oficina-tecnica.component';
import { SolicitudesRrhhComponent } from './pages/rrhh/solicitudes-rrhh/solicitudes-rrhh.component';
import { SolicitudesMantenimientoComponent } from './pages/mantenimiento/solicitudes-mantenimiento/solicitudes-mantenimiento.component';
import { DeptLogisticaComponent } from './pages/logistica/dept-logistica/dept-logistica.component';
import { InicioLogisticaComponent } from './pages/logistica/inicio-logistica/inicio-logistica.component';
import { SolicitudesLogisticaComponent } from './pages/logistica/solicitudes-logistica/solicitudes-logistica.component';
import { rolLogisticaGuard } from './core/guard/rol-logistica.guard';
import { DeptInternacionalComponent } from './pages/internacional/dept-internacional/dept-internacional.component';
import { rolInternacionalGuard } from './core/guard/rol-internacional.guard';
import { InicioInternacionalComponent } from './pages/internacional/inicio-internacional/inicio-internacional.component';
import { SolicitudesInternacionalComponent } from './pages/internacional/solicitudes-internacional/solicitudes-internacional.component';
import { ControlAccesoComponent } from './pages/control-acceso/control-acceso.component';
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
    path: 'control-acceso',
    component: ControlAccesoComponent,
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
            path:'reserva-salas',
            component:ReservaSalasComponent
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
          {
            path: 'dept-laboratorio',
            component:LaboratorioComponent,
            canActivate:[rolLaboratorioGuard],
            children:[
            {
              path:'inicio-laboratorio',
              component:InicioLaboratorioComponent
            },
            {
              path:'solicitudes-laboratorio',
              component:SolicitudesLaboratorioComponent

            }
            
            
            ]



          },
          {
            path:'dept-produccion',
            component:DeptProduccionComponent,
            canActivate:[rolProduccionGuard],
            children:[
            
              {
                path:'inicio-produccion',
                component:InicioProduccionComponent
              },
              {
                path:'solicitudes-produccion',
                component:SolicitudesProduccionComponent
              }
            
            ]

          },
          {
            path:'dept-rrhh',
            component:DeptRrhhComponent,
            canActivate:[rolRrhhGuard],

            children:[
            {
              path:'inicio-rrhh',
              component:InicioRrhhComponent
            },
            {
              path:'solicitudes-rrhh',
              component:SolicitudesRrhhComponent
            }
            
            ]
          },
          {
            path:'dept-oficina-tecnica',
            component:OficinaTecnicaComponent,
            canActivate:[rolOficinaTecnicaGuard],

            children:[
            {
              path:'inicio-oficina-tecnica',
              component:IncioOficinaTecnicaComponent
            },
            {
              path:'solicitudes-oficina-tecnica',
              component:SolicitudesOficinaTecnicaComponent
            }
            ]
          },
          {
            path:'dept-mantenimiento',
            component:DeptMantenimientoComponent,
            canActivate:[rolMantenimientoGuard],

            children:[
            
              {
                path:'inicio-mantenimiento',
                component:InicioMantenimientoComponent
              },
              {
                path:'solicitudes-mantenimiento',
                component:SolicitudesMantenimientoComponent
              }

            ]

          },
          {
            path:'dept-gerencia',
            component:GerenciaComponent,
            canActivate:[rolGerenciaGuard],

            children:[
              {
path:'inicio-gerencia', 
component:InicioGerenciaComponent

              },
              {
                path:'solicitudes-gerencia',
                component:SolicitudesGerenciaComponent
              }
              ]
          },
          {
            path:'dept-logistica',
            component:DeptLogisticaComponent,
            canActivate:[rolLogisticaGuard],
            children:[
            {
              path:'inicio-logistica',
              component:InicioLogisticaComponent
            },
            {
              path:'solicitudes-logistica',
              component:SolicitudesLogisticaComponent
            }
            
            
            ]



          },
          {

            path:'dept-internacional',
            component:DeptInternacionalComponent,
            canActivate:[rolInternacionalGuard],
            children:[
            {
path:'inicio-internacional',
component:InicioInternacionalComponent

            },
             {
path:'solicitudes-internacional',
component:SolicitudesInternacionalComponent
          
             }
          ]
          },

          {
            path:'personal',
            component:PersonalComponent,
            children:[
              {
                path:'solicitud-personal',
                component:SolicituPersonalComponent
              },
              {
                path:'solicitudes-personal',
                canActivate:[personalGuard],

                component:SolicitudesPersonalComponent
              }
            ]
          }
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
