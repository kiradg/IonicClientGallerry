import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Products } from '../models/products';
import { environment } from '../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  // Http Options
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

  // Create a new product
  create(product): Observable<Products> {
    return this.http
      .post<Products>(`${environment.api_url}/products`, JSON.stringify(product), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  // Get single products data by ID
  get(idProduct): Observable<Products> {
    return this.http
      .get<Products>(`${environment.api_url}/products/${idProduct}`)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  // Get products data
  list(): Observable<Products> {
    return this.http
      .get<Products>(`${environment.api_url}/products`)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  // Update product by ID
  update(idProduct, product): Observable<Products> {
    return this.http
      .put<Products>(`${environment.api_url}/products/${idProduct}`, JSON.stringify(product), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  // Delete product by ID
  delete(idProduct) {
    return this.http
      .delete<Products>(`${environment.api_url}/products/${idProduct}`, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

}
