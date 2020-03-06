import { Component, OnInit } from '@angular/core';
import {Livro} from '../model/livro.model';
import { LivroService } from '../service/livro.service';

@Component({
  selector: 'app-livro',
  templateUrl: './livro.component.html',
  styleUrls: ['./livro.component.css']
})
export class LivroComponent implements OnInit {

  livros:Livro[];

  constructor(private livroService:LivroService) { }

  ngOnInit() {
    this.listar();
  }

  listar(){
    this.livroService.listar()
      .subscribe(response=>{
        this.livros=response;
      },error=>{
        alert("Erro ao listar livros");
      });
  }



}
