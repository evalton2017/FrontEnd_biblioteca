import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { API_CONFIG } from '../config/api.config';
import { Observable } from 'rxjs';
import {VinculoEditora} from '../model/vinculo-editora.model';
import { UpdateVinculo } from '../model/update-vinculo.model';

@Injectable({
  providedIn: 'root'
})
export class VinculoEditoraService {

  url = `${API_CONFIG.baseUrl}/vinculoEditora`;
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };


  constructor(private http: HttpClient) { }

  listar(): Observable<VinculoEditora[]>{
    return this.http.get<VinculoEditora[]>(`${this.url}`);
  }

  cadastrar(editora: VinculoEditora){
    return this.http.post(
        `${this.url}/cadastrar`,
        editora, this.httpOptions
    );
  }

  alterar(vinculos: UpdateVinculo[]): Observable<any> {
    return this.http.put(
      `${this.url}/alterar`, vinculos, this.httpOptions
    );
  }



}
