import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Movie } from 'src/app/models/interfaces/movies-popular.interface';
import { environment } from 'src/environments/environment';
import { DialogMovieDetailComponent } from '../dialog-movie-detail/dialog-movie-detail.component';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent implements OnInit {
  @Input() movieInput!: Movie;

  constructor( private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  getMovieImageUrl(movie: Movie) {
    return `${environment.imageBaseUrl}${movie.poster_path}`;
  }

  openDialogMovieDetail(){
    this.dialog.open(DialogMovieDetailComponent, {
      height: '400px',
      width: '300px',
      data: {movieId: this.movieInput?.id}
    })
  }

}
