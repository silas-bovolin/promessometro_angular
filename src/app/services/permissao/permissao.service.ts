import { Injectable } from '@angular/core';
import { jwtDecode } from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class PermissaoService {

  constructor() { }

  estalogado(): boolean {
    let token = localStorage.getItem('token');
    if (!token) {
      return false;
    }
    let expirado = this._tokenExpirado(token);
    if (expirado) {
      localStorage.clear();
    }
    return !expirado;
  }

  salvaToken(token: string) {
    localStorage.setItem('token', token);
  }

  _tokenExpirado(token: string) : boolean {
    const decoded: any = jwtDecode(token);
    const now = Date.now() / 1000;
    return decoded.exp < now;
  }
}
