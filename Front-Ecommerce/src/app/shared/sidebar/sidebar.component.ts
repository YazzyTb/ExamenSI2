import { Component } from '@angular/core';
import { RouterModule,Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

constructor(private router: Router) {}

  cerrarSesion() {
    // 🧹 Aquí puedes limpiar el localStorage/token más adelante
    // localStorage.removeItem('token');

    // Redireccionar a login
    this.router.navigate(['/']);
  }
}