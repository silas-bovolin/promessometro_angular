import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from './../base/base.service';
import { environment } from '../../../environments/environment';
import { SigilometroResponse } from '../../dtos/responses/sigilometro_response.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SigilometroService extends BaseService{

  constructor(http: HttpClient) { super(http); }

  getSigilometro() : Observable<SigilometroResponse> {
    return this.get<SigilometroResponse>('/sigilometro');
  }
}
