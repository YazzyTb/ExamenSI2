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
    { id: 1, nombre: 'Juan Perez', correo: 'juan@correo.com', rol: 'Administrador' },
    { id: 2, nombre: 'Lucía Ríos', correo: 'lucia@correo.com', rol: 'Cajero' },
    { id: 3, nombre: 'Carlos López', correo: 'carlos@correo.com', rol: 'Supervisor' }
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.empleadoId = Number(this.route.snapshot.paramMap.get('id'));
    this.empleado = this.empleadosMock.find(e => e.id === this.empleadoId);
  }
}
