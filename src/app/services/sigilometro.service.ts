import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { environment } from '../../environments/environment';
import { SigilometroResponse } from '../dtos/responses/sigilometro_response.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SigilometroService extends BaseService{

  constructor(private http: HttpClient) { super(); }

  getSigilometro() : Observable<SigilometroResponse> {
    let response = this.http
      .get<SigilometroResponse>(`${environment.apiUrl}/sigilometro`);
    return response;
  }
}
