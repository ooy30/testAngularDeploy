import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpParams, HttpClient} from '@angular/common/http';
import {throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestGetDataService {

  constructor(private http:HttpClient) { }

  getdata() {
    
    return this.http.get<any>('https://mysql-heroku-by-ooy.herokuapp.com/db');
  }
  private handleError(error: HttpErrorResponse) {
    return throwError(error);
  }

}
