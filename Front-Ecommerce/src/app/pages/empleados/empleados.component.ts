import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-empleados',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent {
  filtro: string = '';
  estadoFiltro: string = '';

  empleados = [
    { id: 1, nombre: 'Juan', apellido: 'Pérez', correo: 'juan@example.com', rol: 'Administrador', estado: 'activo' },
    { id: 2, nombre: 'Ana', apellido: 'López', correo: 'ana@example.com', rol: 'Vendedor', estado: 'inactivo' },
    { id: 3, nombre: 'Luis', apellido: 'Gómez', correo: 'luis@example.com', rol: 'Soporte', estado: 'activo' }
  ];

  get empleadosFiltrados() {
    return this.empleados
      .filter(e =>
        (e.nombre + ' ' + e.apellido + ' ' + e.correo + ' ' + e.rol)
          .toLowerCase()
          .includes(this.filtro.toLowerCase())
      )
      .filter(e => !this.estadoFiltro || e.estado === this.estadoFiltro);
  }
  eliminarEmpleado(id: number) {
    if (confirm('¿Deseas eliminar este empleado?')) {
      this.empleados = this.empleados.filter(e => e.id !== id);
    }
  }
}