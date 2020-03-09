import { Component, OnInit, ViewChild } from '@angular/core';
import {Livro} from '../model/livro.model';
import { LivroService } from '../service/livro.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-livro',
  templateUrl: './livro.component.html',
  styleUrls: ['./livro.component.css']
})
export class LivroComponent implements OnInit {
  @ViewChild('formPesquisa', {static:true}) formLivro:NgForm;

  livros:Livro[];
  livro:Livro;
  pesquisa:String='';

  constructor(private livroService:LivroService,
              private router:Router) { }

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

  pesquisar(){
    this.livroService.pesquisar(this.pesquisa)
      .subscribe(response=>{
        this.livros=response;
      },error=>{
        alert("Erro ao realizar a pesquisa")
      })    
  }

  editar(id){
    event.preventDefault()
    this.router.navigate(['/livro/cadastro',{id:id}]);
  }



}
