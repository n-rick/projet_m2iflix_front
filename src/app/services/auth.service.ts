import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url: string = "https://127.0.0.1:8000/authentication_token";

  constructor(private htpp: HttpClient, private router: Router) {
  }

  login(user: User) {
    return this.htpp.post<{ token: string }>(this.url, user);
  }
}
