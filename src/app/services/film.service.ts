import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Film } from '../interfaces/film';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  private url: string = "https://127.0.0.1:8000/api/films";
  private headers: HttpHeaders;

  constructor(private http: HttpClient) {
    const token = localStorage.getItem('tokm2iflix');
    this.headers = new HttpHeaders().set("Authorization", 'Bearer' + token);
  }

  getAllFilms() {
    return this.http.get<Array<Film>>(this.url, {headers: this.headers});
  }
}
