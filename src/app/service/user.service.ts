import { Injectable } from '@angular/core';
import { User } from '../model/user.model';
import { API_CONFIG } from '../config/api.config';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = `${API_CONFIG.baseUrl}/user`;

  constructor(private http:HttpClient) { }

  listar():Observable<User[]>{
    return this.http.get<User[]>(`${this.url}`);
  }

  cadastrar(user:User){
    return this.http.post(
      `${this.url}`,
      user,{
        observe:'response',
        responseType:'text'
      }
    )
  }


}
