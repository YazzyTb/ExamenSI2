import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-empleado-editar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent {
  empleadoId: number = 0;
  empleado = {
    nombre: '',
    apellido: '',
    correo: '',
    rol: '',
    estado: 'activo'
  };

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.empleadoId = Number(this.route.snapshot.paramMap.get('id'));

    const empleadosMock = [
      { id: 1, nombre: 'Juan', apellido: 'Perez', correo: 'juan@correo.com', rol: 'Administrador', estado: 'activo' },
      { id: 2, nombre: 'Lucía', apellido: 'Ríos', correo: 'lucia@correo.com', rol: 'Cajero', estado: 'inactivo' },
      { id: 3, nombre: 'Carlos', apellido: 'López', correo: 'carlos@correo.com', rol: 'Supervisor', estado: 'activo' }
    ];

    const encontrado = empleadosMock.find(e => e.id === this.empleadoId);
    if (encontrado) {
      this.empleado = { ...encontrado };
    }
  }

  guardarCambios() {
    alert('Cambios guardados (simulado)');
    this.router.navigate(['/empleados']);
  }

  volver() {
    this.router.navigate(['/empleados']);
  }
}
