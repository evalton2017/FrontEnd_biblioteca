import { Component, OnInit, ViewChild, Input } from '@angular/core';
import {Livro} from '../model/livro.model';
import { LivroService } from '../service/livro.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { NbTreeGridDataSource, NbSortDirection, NbTreeGridDataSourceBuilder, NbSortRequest } from '@nebular/theme';
import { User } from '../model/user.model';
import { Telefone } from '../model/telefone';

interface TreeNode<Livro> {
  data: Livro;
  children?: TreeNode<Livro>[];
  expanded?: boolean;
}

interface FSEntry {
  id: number;
  titulo: string;
  autor: string;
  ano?: string;
  nome?: string;
  perfil?: string;
  email?: string;
}

@Component({
  selector: 'nb-tree-grid-showcase',
  templateUrl: './livro.component.html',
  styleUrls: ['./livro.component.css']
})
export class LivroComponent implements OnInit {
  @ViewChild('formPesquisa', {static:true}) formLivro:NgForm;

  lista: Livro[] = [];
  livro: Livro;
  pesquisa:String='';
  livros: Livro[] = [];
  livrosNodes: TreeNode<Livro>[]=[];

  customColumn = 'id';
  defaultColumns = [ 'ano', 'titulo', 'autor', ];
  allColumns = [ this.customColumn, ...this.defaultColumns ];

  //TESTE NEBULAR

  dataSource: NbTreeGridDataSource<FSEntry>;

  sortColumn: string;
  sortDirection: NbSortDirection = NbSortDirection.NONE;

  constructor(
    private livroService:LivroService,
    private router:Router,
    private dataSourceBuilder: NbTreeGridDataSourceBuilder<FSEntry>) {
  }

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
}


//TESTE NEBULAR
  ngOnInit() {
    this.listar();
    console.log(this.livrosNodes);
    console.log(this.data);
    this.dataSource = this.dataSourceBuilder.create(this.livrosNodes);
  }

  listar(){
    this.livroService.listar()
      .subscribe(response=>{
        this.lista=response;
        this.livroToTreeNodes(response);
      },error=>{
        alert("Erro ao listar livros");
      });
  }

  pesquisar(){
    this.livroService.pesquisar(this.pesquisa)
      .subscribe(response=>{
        this.lista=response;
      },error=>{
        alert("Erro ao realizar a pesquisa")
      })    
  }

  editar(id){
    event.preventDefault()
    this.router.navigate(['/livro/cadastro',{id:id}]);
  }
}


//TESTE NEBULAR
@Component({
  selector: 'nb-fs-icon',
  template: `
  
    <ng-template #fileIcon>
     
    </ng-template>
  `,
})
export class FsIconComponent {
  @Input() autor: string;
  @Input() expanded: boolean;

  isDir(): boolean {
    return this.autor === 'Duke';
  }
}