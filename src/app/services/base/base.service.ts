import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { ErrorResponse } from '../../dtos/responses/error_response.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  constructor(protected http: HttpClient) {}

  _obterHeaderJson() {
    let token = localStorage.getItem('token');
    if (token) {
      return  {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'bearer ' + token
      })
    }
    }
    return  {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
  }

  _handleError<T>() {
    return (error: HttpErrorResponse): Observable<T> => {
      let parsedError: ErrorResponse;
      
      try {
        parsedError = error.error as ErrorResponse;
      } catch {
        parsedError = { name: 'Erro desconhecido', code: '500' };
      }

      return throwError(() => parsedError);
    }
  }

  protected get<T>(endpoint: string): Observable<T> {
    return this.http.get<T>(`${environment.apiUrl}${endpoint}`, this._obterHeaderJson()).pipe(
      catchError(this._handleError<T>())
    )
  }

  protected post<TRequest, TResponse>(endpoint: string, data: TRequest) : Observable<TResponse> {
    return this.http.post<TResponse>(`${environment.apiUrl}${endpoint}`, data, this._obterHeaderJson()).pipe(
      catchError(this._handleError<TResponse>())
    )
  }
}
