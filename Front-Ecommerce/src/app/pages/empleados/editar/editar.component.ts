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
  empleado = { nombre: '', correo: '', rol: '' };

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.empleadoId = Number(this.route.snapshot.paramMap.get('id'));

    const empleadosMock = [
      { id: 1, nombre: 'Juan Perez', correo: 'juan@correo.com', rol: 'Administrador' },
      { id: 2, nombre: 'Lucía Ríos', correo: 'lucia@correo.com', rol: 'Cajero' },
      { id: 3, nombre: 'Carlos López', correo: 'carlos@correo.com', rol: 'Supervisor' }
    ];

    const encontrado = empleadosMock.find(e => e.id === this.empleadoId);
    if (encontrado) {
      this.empleado = { ...encontrado };
    }
  }

  guardarCambios() {
    alert('Cambios guardados (simulado)');
  }

  volver() {
    this.router.navigate(['/empleados']);
  }
}