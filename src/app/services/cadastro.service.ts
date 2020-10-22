import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  constructor(public http: HttpClient) { }

  getAll() {
    return this.http.get(`${environment.api}/cadastro`)
    .pipe(
      res => res
    )
  }

  create(data){
    return this.http.post(`${environment.api}/cadastro`, data)
    .pipe(
      res => res
    )
  }

}
