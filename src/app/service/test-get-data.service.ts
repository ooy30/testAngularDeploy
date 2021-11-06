import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpParams, HttpClient} from '@angular/common/http';
import {throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestGetDataService {

  constructor(private http:HttpClient) { }

  getdata() {
    return this.http.get<any>('http://localhost:3001/db');
  }

  searchData(params:any) {
    return this.http.get<any>('http://localhost:3001/search',{params: params});
  }
  saveData(body:any) {
    return this.http.post<any>('http://localhost:3001/save-img', body);
}

  private handleError(error: HttpErrorResponse) {
    return throwError(error);
  }

}

