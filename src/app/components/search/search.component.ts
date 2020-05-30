import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { MovieService } from '../../services/movie.service';
import { Movie } from '../../models/movie';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [MovieService]
})
export class SearchComponent {
	public page_title: string;
	public list_movies: any[] = [];
	public success: boolean;
	public searchterm: string;

	constructor(private _movieService: MovieService){
		this.page_title = "Movies Search";
		this.searchterm = "";
	}

	onSearchButtonClick(): void {  
		//console.log(this.searchterm);
		this._movieService.getListMoviesBySearch(this.searchterm).subscribe(
			response => {
				if(response.Response){
					this.success = true;
					this.list_movies = response.Search;
				} else {
					this.success = false;
				}

			},
			error => {
				this.success = false;
				console.log(error);
			}
		);
	}

}
