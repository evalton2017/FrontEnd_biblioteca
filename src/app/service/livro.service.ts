import { Injectable } from '@angular/core';
import {API_CONFIG} from '../config/api.config'
import { HttpClient } from '@angular/common/http';
import { Livro } from '../model/livro.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LivroService {

  url = `${API_CONFIG.baseUrl}/livro`;

  constructor(private http:HttpClient) { }

  listar():Observable<Livro[]>{
    return this.http.get<Livro[]>(`${this.url}`);
  }

  cadastrar(livro:Livro){
    return this.http.post(
        `${this.url}/cadastrar`,
        livro,{
          observe:'response',
          responseType:'text'
        }
    );
  }

}
