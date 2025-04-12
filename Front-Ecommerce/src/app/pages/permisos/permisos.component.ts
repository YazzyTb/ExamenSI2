import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-permisos',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './permisos.component.html',
  styleUrls: ['./permisos.component.css']
})
export class PermisosComponent {
  permisos = [
    { id: 'P01', nombre: 'Crear usuario', descripcion: 'Permite registrar nuevos usuarios' },
    { id: 'P02', nombre: 'Eliminar ventas', descripcion: 'Permite borrar ventas del sistema' },
    { id: 'P03', nombre: 'Ver reportes', descripcion: 'Accede al módulo de reportes' }
  ];
}