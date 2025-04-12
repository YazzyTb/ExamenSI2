import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-empleados',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent {
  empleados = [
    { id: 1, nombre: 'Juan Perez', correo: 'juan.123@gmail.com', rol: 'Administrador' },
    { id: 2, nombre: 'Lucía Ríos', correo: 'lucia.rios@gmail.com', rol: 'Cajero' },
    { id: 3, nombre: 'Carlos López', correo: 'carlos.lopez@gmail.com', rol: 'Supervisor' }
  ];
}