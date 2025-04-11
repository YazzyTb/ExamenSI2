import { provideRouter } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';

export const appConfig = {
  providers: [
    provideRouter([
      { path: '', component: LoginComponent },
      { path: 'home', component: HomeComponent }
    ])
  ]
};
