import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Film } from '../interfaces/film';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  private url: string = "https://127.0.0.1:8000/api/films";
  
  private items: Film[] = [];

  constructor(private http: HttpClient) { }

  getAllFilms() {
    return this.http.get<Array<Film>>(this.url);
  }

  addToMesFilms(film: Film)
  {
    this.items.push(film)
  }

  getFilm(){
    return this.items;
  }

  clearMesFilms(){
    this.items = [];
    return this.items;
  }
}
