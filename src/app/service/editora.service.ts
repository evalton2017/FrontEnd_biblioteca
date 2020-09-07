import { Injectable } from '@angular/core';
import { API_CONFIG } from '../config/api.config';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Editora } from '../model/editora.model';

@Injectable({
  providedIn: 'root'
})
export class EditoraService {
  url = `${API_CONFIG.baseUrl}/editora`;
  urlCep = `https://viacep.com.br/ws/`;
  constructor(private http: HttpClient) { }

  listar(): Observable<Editora[]>{
    return this.http.get<Editora[]>(`${this.url}`);
  }

  cadastrar(editora: Editora){
    return this.http.post(
        `${this.url}/cadastrar`,
        editora, {
          observe: 'response',
          responseType: 'text'
        }
    );
  }

  buscaCep(cep: string){
    return this.http.get(
     `${this.urlCep}/${cep}/json`
    );
  }
}
