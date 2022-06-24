import { Component, OnInit } from '@angular/core';
import { Film } from 'src/app/interfaces/film';
import { User } from 'src/app/interfaces/user';
import { FilmService } from 'src/app/services/film.service';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {
  
  film: Film = {};
  films: Array<Film> = [];

  constructor(private fs: FilmService) { }

  ngOnInit(): void {
    this.initFilm();
  }
  
  initFilm(){
    this.fs.getAllFilms().subscribe(res => {
      this.films = res;
    })
  }

  addFilms(film: Film){
    this.fs.addToMesFilms(film);
    window.alert('Votre film a été ajouté!');
  }

}
