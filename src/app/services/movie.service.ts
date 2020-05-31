import {Injectable} from '@angular/core';
import {HttpHeaders, HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Movie} from '../models/movie';
import {global} from './global';

@Injectable()
export class MovieService{
	public url: string;
	private api_key: string;

	constructor( private _http: HttpClient ){
		this.url = global.url;
		this.api_key = global.api_key;
	}

	getListMoviesBySearch(search_input):Observable<any>{
		let headers = new HttpHeaders().set('Content-type','application/x-www-form-urlencoded; charset=UTF-8');
		return this._http.get(this.url + '?s=' + search_input + '&apikey=' + this.api_key, {headers: headers});
	};

	getMovieById(id):Observable<any>{
		let headers = new HttpHeaders().set('Content-type','application/x-www-form-urlencoded; charset=UTF-8');
		return this._http.get(this.url + '?i=' + id + '&apikey=' + this.api_key, {headers: headers});
	};
}