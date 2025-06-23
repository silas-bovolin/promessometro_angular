import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { BaseService } from '../base/base.service';
import { PromessaResponse } from '../../dtos/responses/promessa_response.model';

@Injectable({
  providedIn: 'root'
})
export class PromessaService extends BaseService {

  constructor(http: HttpClient) { super(http); }

  getPromessas() : Observable<PromessaResponse[]> {
    return this.http.get<PromessaResponse[]>('/promessa');
  }
}