import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Gallery } from '../models/gallery';

@Injectable({
  providedIn: 'root'
})
export class ApiGalleryService {

  base_path = 'http://192.168.100.94/api';
  product_path = 'products';
  gallery_path = 'gallery';

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

  createItem(idProduct,item): Observable<Gallery> {
    return this.http
      .post<Gallery>(this.base_path + '/' + this.product_path + '/' + idProduct + '/' + this.gallery_path, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  // Get products data
  getList(idProduct): Observable<Gallery> {
    return this.http
      .get<Gallery>(this.base_path + '/' + this.product_path + '/' + idProduct + '/' + this.gallery_path)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  deleteItem(idProduct,idGallery) {
    return this.http
      .delete<Gallery>(this.base_path + '/' + this.product_path + '/' + idProduct + '/' + this.gallery_path + '/'+ idGallery, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

}
