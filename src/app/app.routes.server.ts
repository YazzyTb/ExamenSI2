import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'empleados/:id',
    renderMode: RenderMode.Client
  },
  {
    path: 'empleados/editar/:id',
    renderMode: RenderMode.Client
  },
  {
    path: 'clientes/:id',
    renderMode: RenderMode.Client
  },
  {
    path: 'clientes/editar/:id',
    renderMode: RenderMode.Client
  },
  {
    path: 'roles/editar/:id',
    renderMode: RenderMode.Client
  },
  {
    path: 'inventario/editar/:id',
    renderMode: RenderMode.Client
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];
