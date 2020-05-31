import { Component, OnInit, DoCheck } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { MovieService } from '../../services/movie.service';
import { Movie } from '../../models/movie';
import { fadeToBottom } from '../animation';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  animations: [fadeToBottom],
  providers: [MovieService]
})
export class SearchComponent implements DoCheck {
	public page_title: string;
	public list_movies: any[] = [];
	public success: boolean;
	public searchterm: string;
	public arrayFav: any[] = [];
	public favterm: any[] = [];
	public error: string;

	constructor(private _movieService: MovieService){
		this.page_title = "Movie Search";
		this.searchterm = "";
	}

	ngDoCheck(){
		this.arrayFav = JSON.parse(localStorage.getItem('FavoriteSearchs'));
	}

	onSearchButtonClick(optionalTerm: string = this.searchterm): void {  
		this._movieService.getListMoviesBySearch(optionalTerm).subscribe(
			response => {
				if(response.Response == "True"){
					this.success = true;
					this.list_movies = response.Search;
				} else {
					this.success = false;
					this.error = response.Error;
				}
			},
			error => {
				this.success = false;
				this.error = error;
			}
		);

		for(let i=0;i<this.arrayFav.length;i++){
			if(this.arrayFav[i].term == this.searchterm){
				this.arrayFav[i].counter += 1;
			}
		}
		localStorage.setItem("FavoriteSearchs", JSON.stringify(this.arrayFav));
	}

	onClickTerm(term):void{
		this.searchterm = "";
		for(let i=0;i<this.arrayFav.length;i++){
			if(this.arrayFav[i].term == term){
				this.arrayFav[i].counter += 1;
			}
		}
		localStorage.setItem("FavoriteSearchs", JSON.stringify(this.arrayFav));

		this.onSearchButtonClick(term);
		this.searchterm = term;
	}

	onClickAddToFav():void{
		if(this.arrayFav.length<3){
			this.arrayFav.push({'term':this.searchterm,'counter':0});
			localStorage.setItem("FavoriteSearchs", JSON.stringify(this.arrayFav));
		}
	}

	checkFav(){
		let items_fav_box = JSON.parse(localStorage.getItem('FavoriteSearchs'))

		for(let i=0; i<items_fav_box.length; i++){
			if(this.searchterm == items_fav_box[i].term){
				return true;
			}
		}

		return false;
	}
}
