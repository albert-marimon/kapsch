import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { MovieService } from '../../services/movie.service';
import { Movie } from '../../models/movie';
import { fadeLateral } from '../animation';
import { BarRatingModule } from "ngx-bar-rating";

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css'],
  animations: [fadeLateral],
  providers: [MovieService]
})
export class MovieDetailComponent implements OnInit {
	public success: boolean;
	public movie: Movie;

	constructor(
		private _movieService: MovieService,
		private _router: Router,
		private _route: ActivatedRoute
		) {
		this.movie = new Movie("",0,0,"","");
	}

	ngOnInit(): void {
		this.getMovie();
	}

	getMovie(){
  		this._route.params.subscribe(params => {
  			let id = params['idimdb'];

  			this._movieService.getMovieById(id).subscribe(
				response => {
					if(response.Response == "True"){
						this.success = true;
						this.movie = response;
					} else {
						this.success = false;
					}
				},
				error => {
					this.success = false;
				}
			);
  		})
  	}
}
