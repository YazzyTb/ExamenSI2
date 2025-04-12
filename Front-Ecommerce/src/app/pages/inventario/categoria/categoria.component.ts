import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-categoria',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent {
  categorias = [
    { id: 1, nombre: 'Celulares' },
    { id: 2, nombre: 'Accesorios' }
  ];

  nuevaCategoria = '';

  agregarCategoria() {
    if (this.nuevaCategoria.trim()) {
      const nueva = {
        id: this.categorias.length + 1,
        nombre: this.nuevaCategoria
      };
      this.categorias.push(nueva);
      this.nuevaCategoria = '';
    }
  }
}