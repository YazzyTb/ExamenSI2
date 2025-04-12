import { provideRouter } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DashboardLayoutComponent } from './layouts/dashboard-layout/dashboard-layout.component';
import { BitacoraComponent } from './pages/bitacora/bitacora.component';
import { EmpleadosComponent } from './pages/empleados/empleados.component';
import { RolesComponent } from './pages/roles/roles.component';
import { RolCrearComponent } from './pages/roles/rolcrear/rolcrear.component';
import { RolEditarComponent } from './pages/roles/rol-editar/rol-editar.component';

import { PermisosComponent } from './pages/permisos/permisos.component';
import { CrearPermisoComponent } from './pages/permisos/crear-permiso/crear-permiso.component';
import { EmpleadoDetalleComponent } from './pages/empleados/empleado-detalle/empleado-detalle.component';
import { EditarComponent } from './pages/empleados/editar/editar.component';
import {CrearEmpleadoComponent } from './pages/empleados/crear-empleado/crear-empleado.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { ClienteDetallesComponent } from './pages/clientes/cliente-detalles/cliente-detalles.component';
import { EditarClienteComponent } from './pages/clientes/editar-cliente/editar-cliente.component';


export const appConfig = {
  providers: [
    provideRouter([
      { path: '', component: LoginComponent },
      {
        path: '',
        component: DashboardLayoutComponent,
        children: [
          { path: '', redirectTo: 'bitacora', pathMatch: 'full' },
          { path: 'bitacora', component: BitacoraComponent },
          { path: 'permisos', component: PermisosComponent },
          { path: 'permisos/crear',component: CrearPermisoComponent },
          { path: 'roles', component: RolesComponent },
          { path: 'roles/crear',
            component: RolCrearComponent },
          { path: 'roles/editar/:id', component: RolEditarComponent },
          { path: 'empleados', component: EmpleadosComponent },
          { path: 'empleados/crear', component: CrearEmpleadoComponent },
          { path: 'empleados/:id', component: EmpleadoDetalleComponent },
          { path: 'empleados/editar/:id', component: EditarComponent },
          { path: 'clientes', component: ClientesComponent },
          { path: 'clientes/:id', component: ClienteDetallesComponent },
          { path: 'clientes/editar/:id', component: EditarClienteComponent},
        ]
      }
    ])
  ]
};
