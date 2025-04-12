import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-marca',
  standalone: true,
  imports: [ CommonModule, FormsModule ],
  templateUrl: './marca.component.html',
  styleUrl: './marca.component.css'
})
export class MarcaComponent {
  marcas = [
    { id: 1, nombre: 'Xiaomi' },
    { id: 2, nombre: 'Samsung' }
  ];

  nuevamarca = '';

  agregarMarca(){
    if (this.nuevamarca.trim()){
      const nueva = {
        id: this.marcas.length + 1,
        nombre: this.nuevamarca
      };
      this.marcas.push(nueva);
      this.nuevamarca = '';
    }
  }


}
