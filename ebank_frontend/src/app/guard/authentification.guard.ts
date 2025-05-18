import {  Injectable } from '@angular/core';
import {  Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationGuard{
  constructor(private authService:AuthService,private router:Router) { }

  canActivate(): boolean {
    // Check if the user is authenticated
    if (this.authService.isAuthenticated== true) {
      // User is authenticated, allow access
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}


