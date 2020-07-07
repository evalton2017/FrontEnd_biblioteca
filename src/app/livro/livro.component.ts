import { Component, OnInit, ViewChild, Input } from '@angular/core';
import {Livro} from '../model/livro.model';
import { LivroService } from '../service/livro.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { NbTreeGridDataSource, NbSortDirection, NbTreeGridDataSourceBuilder, NbSortRequest } from '@nebular/theme';
import { User } from '../model/user.model';

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

  livros: Livro[] = [];
  livro: Livro;
  pesquisa:String='';

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
    this.dataSource = this.dataSourceBuilder.create(this.data);
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

  private LivroToTreeNodes(livros: Livro[]) {
    for (let livro of livros) {
        this.livros.push(this.livroToTreeNode(livro));
    }
}

private livroToTreeNode(livro: Livro): TreeNode<FSEntry> {
    let livrosTreeNodes: TreeNode<FSEntry>[] = [];

    if (livro.user !== undefined) {
        for (let user of livro.user) {
          livrosTreeNodes.push(this.UserToTreeNode(user));
        }
    }
    return {
        label: livro.ano,
        data: livro,
        children: livrosTreeNodes
    };
}

private UserToTreeNode(user: User) : TreeNode<FSEntry> {
    return {
        label: user.nome,
        data: user
    }
}


//TESTE NEBULAR
  ngOnInit() {
    this.listar();
  }

  listar(){
    this.livroService.listar()
      .subscribe(response=>{
        this.livros=response;
        console.log(this.livros);
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


//TESTE NEBULAR
@Component({
  selector: 'nb-fs-icon',
  template: `
  
    <ng-template #fileIcon>
     
    </ng-template>
  `,
})
export class FsIconComponent {
  @Input() id: string;
  @Input() expanded: boolean;

  isDir(): boolean {
    return this.id === 'dir';
  }
}