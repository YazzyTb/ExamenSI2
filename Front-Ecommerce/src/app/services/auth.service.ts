import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  login(email: string, password: string) {
    if (email === 'admin@admin.com' && password === '1234') {
      alert('¡Inicio de sesión exitoso!');
    } else {
      alert('Credenciales inválidas');
    }
  }
}

