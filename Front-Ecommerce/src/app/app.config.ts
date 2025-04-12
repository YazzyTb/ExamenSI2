import { provideRouter } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DashboardLayoutComponent } from './layouts/dashboard-layout/dashboard-layout.component';
import { BitacoraComponent } from './pages/bitacora/bitacora.component';
import { EmpleadosComponent } from './pages/empleados/empleados.component';
import { RolesComponent } from './pages/roles/roles.component';
import { PermisosComponent } from './pages/permisos/permisos.component';
import { EmpleadoDetalleComponent } from './pages/empleados/empleado-detalle/empleado-detalle.component';
import { EditarComponent } from './pages/empleados/editar/editar.component';
import {CrearEmpleadoComponent } from './pages/empleados/crear-empleado/crear-empleado.component';

export const appConfig = {
  providers: [
    provideRouter([
      { path: '', component: LoginComponent },
      {
        path: '',
        component: DashboardLayoutComponent,
        children: [
          { path: 'bitacora', component: BitacoraComponent },
          { path: 'empleados', component: EmpleadosComponent },
          { path: 'empleados/roles', component: RolesComponent },
          { path: 'empleados/permisos', component: PermisosComponent },
          { path: '', redirectTo: 'bitacora', pathMatch: 'full' },
          {path: 'empleados/crear', component: CrearEmpleadoComponent},
          {path: 'empleados/:id',
            component: EmpleadoDetalleComponent},
          {path: 'empleados/editar/:id', component: EditarComponent}
        ]
      }
    ])
  ]
};
