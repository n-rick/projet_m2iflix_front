import { Component, OnInit } from '@angular/core';
import { Film } from 'src/app/interfaces/film';
import { FilmService } from 'src/app/services/film.service';

@Component({
  selector: 'app-mes-films',
  templateUrl: './mes-films.component.html',
  styleUrls: ['./mes-films.component.css']
})
export class MesFilmsComponent implements OnInit {

  
  constructor(private fs: FilmService) { }
  
  films = this.fs.getFilm();

  ngOnInit(): void {
  }

}
