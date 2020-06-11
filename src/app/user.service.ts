import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { User } from './shared/model/user';
import { catchError } from 'rxjs/operators';
import {Observable, throwError} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  
  private _url: string = "/assets/data/user.json";

  constructor(private http:HttpClient) { }
  
  /*getUsers(): Observable<User[ ]>{
    return this.http.get<User[ ]>(this._url)
                    .catch(this.errorHandler);
  }*/

  getUsers():Observable<User[]>{
    return this.http.get<User[]>(this._url).pipe(catchError(this.errorHandler));
}
  errorHandler(error: HttpErrorResponse){
    return throwError(error.message || "Server Error");
  }

}





