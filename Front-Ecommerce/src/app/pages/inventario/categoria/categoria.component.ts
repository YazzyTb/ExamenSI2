import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categoria',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent {
  constructor(private router: Router) {}

  categorias = [
    { id: 1, nombre: 'Celulares' },
    { id: 2, nombre: 'Accesorios' }
  ];

  nuevaCategoria = '';

  agregarCategoria() {
    if (this.nuevaCategoria.trim()) {
      const nueva = {
        id: this.categorias.length + 1,
        nombre: this.nuevaCategoria.trim()
      };
      this.categorias.push(nueva);
      this.nuevaCategoria = '';
    }
  }

  volver() {
    this.router.navigate(['/inventario']);
  }
}
