import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {jwtDecode} from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated: boolean = false;
  roles: any;
  username: any;
  password: any;
  accessToken!: string;

  constructor(private http : HttpClient,private router : Router) { }

  public login(username: string, password: string){
    // Set content type for form URL encoded
    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

    // Prepare URL-encoded params
    const params = new HttpParams()
      .set('username', username)
      .set('password', password);

    // Send the POST request
    return this.http.post('http://localhost:8085/auth/login', params, { headers });
  }
  public loadProfile(data: any) {
    this.isAuthenticated = true;
    this.accessToken = data["access-token"];
    let decodeJwt:any=jwtDecode(this.accessToken);
    this.roles = decodeJwt.scope;
    this.username = decodeJwt.sub;
    window.localStorage.setItem("access-token",this.accessToken);
  }
  public logout() {
    this.isAuthenticated = false;
    this.accessToken = "";
    this.roles = null;
    this.username = null;
  }

  public loadjwtTokenfromLocalStorage(){
    let token = window.localStorage.getItem("access-token") || "";
    if(token){
      this.loadProfile({"acess-token" : token});
      this.router.navigate(['/admin']);
    }

  }
}
