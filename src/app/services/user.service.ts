import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url: string = "https://127.0.0.1:8000/api/users";

  constructor(private http: HttpClient) {
  }

  addNewUser(u: User) {
    return this.http.post<User>(this.url, u);
  }
  
  getOneUser(id: any) {
    return this.http.get<User>(`${this.url}/${id}/films`);
  }

  showUserFilms(id: any){
    return this.http.get<User>(`${this.url}/${id}/films`);
  }
}
