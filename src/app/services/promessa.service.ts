import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { BaseService } from './base.service';
import { PromessaResponse } from '../dtos/responses/promessa_response.model';

@Injectable({
  providedIn: 'root'
})
export class PromessaService extends BaseService {

  constructor(private http: HttpClient) { super(); }

  getPromessas() : Observable<PromessaResponse[]> {
    let response = this.http
      .get<PromessaResponse[]>(`${environment.apiUrl}/promessa`);
    return response;
  }
}
