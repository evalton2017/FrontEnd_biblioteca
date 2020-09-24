import { Component, OnInit, ViewChild, Input } from '@angular/core';
import {Livro} from '../model/livro.model';
import { LivroService } from '../service/livro.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { NbSortDirection} from '@nebular/theme';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'nb-tree-grid-showcase',
  templateUrl: './livro.component.html',
  styleUrls: ['./livro.component.css']
})
export class LivroComponent implements OnInit {
  @ViewChild('formPesquisa', {static: true}) formLivro: NgForm;

  livros: Livro[] = [];
  livro: Livro;
  // tslint:disable-next-line:ban-types
  pesquisa: String = ``;

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
        filter: false
      }
    }
  };
  dataSource: LocalDataSource;
  sortColumn: string;
  sortDirection: NbSortDirection = NbSortDirection.NONE;

  constructor(
    private livroService: LivroService,
    private router: Router) {
  }

  ngOnInit() {
    this.listar();
  }

  listar(){
    this.livroService.listar()
      .subscribe(response => {
        this.livros = response;
        this.dataSource = new LocalDataSource(this.livros);
      }, error => {
        alert('Erro ao listar livros');
      });
  }

  pesquisar(){
    this.livroService.pesquisar(this.pesquisa)
      .subscribe(response => {
        this.livros = response;
      }, error => {
        alert('Erro ao realizar a pesquisa');
      });
  }

  editar(id){
    // event.preventDefault();
    this.router.navigate(['/livro/cadastro', {id}]);
  }

}
