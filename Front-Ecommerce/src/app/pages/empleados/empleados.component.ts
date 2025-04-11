import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-empleados',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent {
  empleados = [
    { nombre: 'Juan Perez', correo: 'juan.123@gmail.com', rol: 'Administrador' },
    { nombre: 'Lucía Ríos', correo: 'lucia.rios@gmail.com', rol: 'Cajero' },
    { nombre: 'Carlos López', correo: 'carlos.lopez@gmail.com', rol: 'Supervisor' }
  ];
}