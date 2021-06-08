import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Gallery } from '../models/gallery';
import { environment } from '../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  // Handle API errors
  handleError(error: HttpErrorResponse) {
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

  // Get products data
  list(idProduct): Observable<Gallery> {
    return this.http
      .get<Gallery>(`${environment.api_url}/products/${idProduct}/gallery`)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  delete(idProduct,idGallery) {
    return this.http
      .delete<Gallery>(`${environment.api_url}/products/${idProduct}/gallery/${idGallery}`, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

}
