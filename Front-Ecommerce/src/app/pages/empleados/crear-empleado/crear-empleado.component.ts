import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-empleado-crear',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './crear-empleado.component.html',
  styleUrls: ['./crear-empleado.component.css']
})
export class CrearEmpleadoComponent {
  empleado = { nombre: '', correo: '', rol: '' };

  constructor(private router: Router) {}

  crearEmpleado() {
    alert('Empleado creado (simulado)');
    this.router.navigate(['/empleados']);
  }

  volver() {
    this.router.navigate(['/empleados']);
  }
}