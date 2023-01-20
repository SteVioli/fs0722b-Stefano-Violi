import { Component, OnInit } from '@angular/core';
import { AuthService, Movie } from '../../auth/auth.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';


@Component({
    selector: 'app-movies',
    templateUrl: './movies.component.html',
    styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
    sub!:Subscription
    movies:Movie[] = []
    private jsonUrl = 'assets/db.json';

    constructor(private http:HttpClient, private as:AuthService) {

    }

    public GETJSON():Observable<any>{
        return this.http.get(this.jsonUrl)
    }

    urlBase: string = 'https://image.tmdb.org/t/p/w500';

    ngOnInit(){
        //  this.sub= this.as.getMovies().subscribe((res) => {
        //      this.movies= res;
        //  })             NON MI PRENDE IL SUBSCRIBE
    }



}
