import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PermissaoService {

  constructor() { }

  estalogado(): boolean {
    return !!localStorage.getItem('token');
  }

  salvaToken(token: string) {
    localStorage.setItem('token', token);
  }
}
