import { Component, OnInit, ViewChild, Input } from '@angular/core';
import {Livro} from '../model/livro.model';
import { LivroService } from '../service/livro.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { NbSortDirection} from '@nebular/theme';
import { LocalDataSource } from 'ng2-smart-table';


@Component({
  selector: 'nb-tree-grid-showcase',
  templateUrl: './livro.component.html',
  styleUrls: ['./livro.component.css']
})
export class LivroComponent implements OnInit {
  @ViewChild('formPesquisa', {static:true}) formLivro:NgForm;

  livros: Livro[] = [];
  livro: Livro;
  pesquisa:String='';

  settings = {
    columns: {
      id: {
        title: 'Codigo'
      },
      ano: {
        title: 'Ano'
      },
      titulo: {
        title: 'Titulo'
      },
      autor: {
        title: 'Autor'
      },
      acoes: {
        title: 'Ações',
        filter:false
      }
    }
  }

  //TESTE NEBULAR

  dataSource: LocalDataSource;

  sortColumn: string;
  sortDirection: NbSortDirection = NbSortDirection.NONE;

  constructor(
    private livroService:LivroService,
    private router:Router) {
  }

  
  ngOnInit() {
    this.listar();
  }

  listar(){
    this.livroService.listar()
      .subscribe(response=>{
        this.livros=response;
        this.dataSource = new LocalDataSource(this.livros);
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

/*
  updateSort(sortRequest: NbSortRequest): void {
    this.sortColumn = sortRequest.column;
    this.sortDirection = sortRequest.direction;
  }

  getSortDirection(column: string): NbSortDirection {
    if (this.sortColumn === column) {
      return this.sortDirection;
    }
    return NbSortDirection.NONE;
  }

  private data: TreeNode<FSEntry>[] = [
    {
      data:  { id: 12, ano: 'bkp', titulo: 'titulo', autor: 'autor' },
      children: [
        { data: { id: 12, nome: 'bkp', email: 'fulano@gmail.com', titulo: 'titulo', autor: 'autor' } },
        { data: { id: 34, nome: 'txt', email: 'fulano@gmail.com', titulo: 'titulo', autor: 'autor' } },
      ],
    },
  ];

  getShowOn(index: number) {
    const minWithForMultipleColumns = 400;
    const nextColumnStep = 100;
    return minWithForMultipleColumns + (nextColumnStep * index);
  }

private livroToTreeNodes(livros: Livro[]) {
    for (let livro of livros) {
      this.livrosNodes.push(this.livroToTreeNode(livro));
    }
    //this.dataSource = this.dataSourceBuilder.create(this.livrosNodes);
}

private livroToTreeNode(livro: Livro): TreeNode<Livro> {
    let userTreeNodes: TreeNode<any>[] = [];

    if (livro.user.telefones !== undefined) {
        for (let user of livro.user.telefones) {
          userTreeNodes.push(this.UserToTreeNode(user));
        }
    }
    return {
        data: livro,
        children: userTreeNodes,
    };
}

private UserToTreeNode(user: Telefone) : TreeNode<any> {
    return {
        data: user
    }
}*/

}
