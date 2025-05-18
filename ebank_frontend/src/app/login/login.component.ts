import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  formLogin! : FormGroup;
  constructor(private fb : FormBuilder, private authService:AuthService,private router : Router) { }
  ngOnInit(): void {
    this.formLogin=this.fb.group({
      username : this.fb.control(null),
      password : this.fb.control(null)
    });
  }

  handleLogin() {
    let username = this.formLogin.value.username;
    let password = this.formLogin.value.password;
    this.authService.login(username, password).subscribe({
      next : (data) => {
        alert("Login successful!");
        this.authService.loadProfile(data);
        this.router.navigateByUrl("/admin");
      },
      error : (err) => {
        alert("Login failed!");
        console.log(err);
      }
    });
  }


}
