import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  styleUrls: ['./login.component.css'],
  templateUrl: './login.component.html'
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  onSubmit() {
    if (this.email === 'admin@admin.com' && this.password === '1234') {
      alert('¡Inicio de sesión exitoso!');
      this.router.navigate(['/bitacora']);
    } else {
      alert('Credenciales inválidas');
    }
  }
}


