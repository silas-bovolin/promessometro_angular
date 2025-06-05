import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export abstract class BaseService {
  protected ObterHeaderJson() {
    return  {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
  }
}
