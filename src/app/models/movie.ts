export class Movie{
	public rated: string;
	public released: string; //DATE
	public Runtime: string;
	public Genre: string;
	public Director: string;
	public writer: string;
	public Actors: string;
	public Plot: string;
	public Language: string;
	public country: string;
	public Awards: string;
	public Ratings: any[] = [];
	public metascore: number;
	public imdbRating: number;
	public imdbVotes: number;
	public dvd: string; //DATE
	public box_office: string;
	public production: string;
	public website: string;
	
	constructor(
		public Title: string,
		public Year: number,
		public imdbID: number,
		public Type: string,
		public Poster: string
	){}
}