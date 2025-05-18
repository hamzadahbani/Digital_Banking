import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  formLogin! : FormGroup;
  constructor(private fb : FormBuilder) { }
  ngOnInit(): void {
    this.formLogin=this.fb.group({
      username : this.fb.control(null),
      password : this.fb.control(null)
    });
  }

  handleLogin() {
    let username = this.formLogin.value.username;
    let password = this.formLogin.value.password;
    console.log(username);
    console
  }


}
