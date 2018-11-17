import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Resource } from '../../models/resource.model';

@Injectable({
  providedIn: 'root'
})
export class BaseService<T extends Resource> {

  constructor(
    private httpClient: HttpClient,
    private url: string,
    private endpoint: string

  ) { }

  get(id: number): Observable<T> {
    return this.httpClient.get<T>(`${this.url}/${this.endpoint}/${id}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  // retrieve(queryOptions: QueryOptions): Observable<T[]> {
  //   return this.httpClient.get<T[]>(`${this.url}/${this.endpoint}?${queryOptions.toQueryString()}`);
  // }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };
}
