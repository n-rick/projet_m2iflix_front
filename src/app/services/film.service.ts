import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Film } from '../interfaces/film';

@Injectable({
  providedIn: 'root'
})
export class FilmService {
  
  private url:string = "https://127.0.0.1:8000/api/film"

  constructor(private http: HttpClient) { }

  getAllFilms(){
    return this.http.get<Array<Film>>(this.url);
  }
}
