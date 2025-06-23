import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseService } from '../base/base.service';
import { LoginResponse } from '../../dtos/responses/login_response.model';
import { LoginRequest } from '../../dtos/requests/login_request.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService extends BaseService {

  constructor(http: HttpClient) { super(http); }

  login(request: LoginRequest) : Observable<LoginResponse> {
    return this.post<LoginRequest, LoginResponse>(
        '/Usuario/Login', 
        request);
  }
}