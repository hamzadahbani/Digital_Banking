import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http : HttpClient) { }

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
}
