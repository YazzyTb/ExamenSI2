import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-empleado-detalle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './empleado-detalle.component.html',
  styleUrls: ['./empleado-detalle.component.css']
})
export class EmpleadoDetalleComponent {
  empleadoId: number = 0;
  empleado: any;

  empleadosMock = [
    { id: 1, nombre: 'Juan', apellido: 'Perez', correo: 'juan@correo.com', rol: 'Administrador', estado: 'activo' },
    { id: 2, nombre: 'Lucía', apellido: 'Ríos', correo: 'lucia@correo.com', rol: 'Cajero', estado: 'inactivo' },
    { id: 3, nombre: 'Carlos', apellido: 'López', correo: 'carlos@correo.com', rol: 'Supervisor', estado: 'activo' }
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.empleadoId = Number(this.route.snapshot.paramMap.get('id'));
    this.empleado = this.empleadosMock.find(e => e.id === this.empleadoId);
  }

  volver() {
    history.back();
  }
}