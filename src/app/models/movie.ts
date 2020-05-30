export class Movie{
	public rated: string;
	public released: string; //DATE
	public runtime: string;
	public genre: string;
	public director: string;
	public writer: string;
	public actors: string;
	public plot: string;
	public language: string;
	public country: string;
	public awards: string;
	public ratings: any[] = [];
	public metascore: number;
	public imdb_rating: number;
	public imdb_votes: number;
	public dvd: string; //DATE
	public box_office: string;
	public production: string;
	public website: string;
	
	constructor(
		public title: string,
		public year: number,
		public imdb_id: number,
		public type: string,
		public poster: string
	){}
}