import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import {VinculoEditora} from '../../model/vinculo-editora.model';
import {VinculoEditoraService} from '../../service/vinculo-editora.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Livro } from 'src/app/model/livro.model';
import { LivroService } from 'src/app/service/livro.service';
import { EditoraService } from 'src/app/service/editora.service';
import { Editora } from 'src/app/model/editora.model';
import {UpdateVinculo} from '../../model/update-vinculo.model';

@Component({
  selector:  'app-cadastrar',
  templateUrl:  './cadastrar.component.html',
  styleUrls:  ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit, AfterViewInit {
  vinculoForm: FormGroup;
  vinculo: VinculoEditora;
  vinculos: VinculoEditora [];
  listaLivros: Livro [] = [];
  livrosAdd: Livro [] = [];
  livrosInfo: Livro [] = [];
  editoras: Editora [] = [];
  updateVinculos: UpdateVinculo [] = [];
  editora: Editora;
  closeResult: string;
  public paginaAtual = 1;

  constructor(
    private vinculoService: VinculoEditoraService,
    private livroService: LivroService,
    private editoraService: EditoraService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private modalService: NgbModal) { }

  ngOnInit(): void {
    this.vinculoForm = this.formBuilder.group({
      editora: ['', [Validators.required]],
      livros: [null, [Validators.required]]
    });
    this.listar();
  }

  ngAfterViewInit(){
    this.listarLivros();
    this.listarEditoras();
  }

  listar(){
    this.vinculoService.listar()
      .subscribe(response => {
        this.vinculos = this.ordenar(response);
      },
        error => {
          alert('erro ao consultar vinculos');
        }
      );
  }

  ordenar(lista: any){
    lista.sort((a, b) => {
      return a.posicao - b.posicao;
    });
    return lista;
  }
  cadastrar(){
    this.setObjeto();
    this.vinculoService.cadastrar(this.vinculo)
    .subscribe(response => {
      this.vinculo = new VinculoEditora();
      this.ngOnInit();
    },
      error => {
        const erro = JSON.parse(error.error);
        alert(erro.errors[0].message);
      }
    );

  }

  setObjeto(){
   this.vinculo = new VinculoEditora();
   this.vinculo.livros = this.livrosAdd;
   this.editoras.forEach(e => {
     // tslint:disable-next-line:radix
    if ( e.id === parseInt(this.vinculoForm.value.editora)){
      this.vinculo.editora = e;
    }
  });
  }

  posicaoDow(vinculo1: VinculoEditora, vinculo2: VinculoEditora){
    const pos = vinculo1.posicao;
    vinculo1.posicao = vinculo2.posicao;
    vinculo2.posicao = pos;
    let update1: UpdateVinculo;
    // tslint:disable-next-line:new-parens
    update1 = new UpdateVinculo;
    update1.id = vinculo1.id;
    update1.posicao = vinculo1.posicao;
    let update2: UpdateVinculo;
    update2 = new UpdateVinculo();
    update2.id = vinculo2.id;
    update2.posicao = pos;
    this.updateVinculos = [update1, update2];
    this.vinculoService.alterar(this.updateVinculos)
    .subscribe(response => {
      this.ngOnInit();
    },
      error => {
        alert('erro ao alterar as posições');
      }
    );
  }

  posicaoUp(vinculo1: VinculoEditora, vinculo2: VinculoEditora){
    const pos = vinculo2.posicao;
    vinculo2.posicao = vinculo1.posicao;
    vinculo1.posicao = pos;
    let update2: UpdateVinculo;
    // tslint:disable-next-line:new-parens
    update2  =  new UpdateVinculo;
    update2.id = vinculo2.id;
    update2.posicao = vinculo2.posicao;
    let update1: UpdateVinculo;
    update1  =  new UpdateVinculo();
    update1.id = vinculo1.id;
    update1.posicao = pos;
    this.updateVinculos  = [update2, update1];
    this.vinculoService.alterar(this.updateVinculos)
    .subscribe(response => {
      this.ngOnInit();
    },
      error => {
        alert('erro ao alterar as posições');
      }
    );
  }

  listarLivros(){
    this.livroService.listar()
      .subscribe(response => {
        this.listaLivros = response;
      },
        error => {
          alert('erro ao consultar livros');
        }
      );
  }

  verificaLivrosVinculados(){
    this.vinculos.forEach(v => {
      v.livros.forEach(l => {
       let cont  =  0;
       this.listaLivros.forEach(li => {
         if (li.id === l.id){
           this.listaLivros.splice(cont, 1);
         }
         cont++;
       });
      });
    });
  }

  listarEditoras(){
    this.editoraService.listar()
      .subscribe(response => {
        this.editoras = response;
      },
        error => {
          alert('erro ao consultar editoras');
        }
      );
  }

  get livros(): FormArray{
    return this.vinculoForm.get('livros') as FormArray;
  }

  adicionaLivros(valor: any){
    let count  =  0;
    let chek  =  false;
    this.livrosAdd.forEach(l  => {
        if (l.id === valor){
          this.livrosAdd.splice(count, 1);
          chek  =  true;
        }
        count++;
    });
    if (chek === false){
        this.listaLivros.forEach(l  => {
          if (l.id === valor){
            this.livrosAdd.push(l);
          }
        });
    }
  }

 /* addLivros(){
    this.livros.push(this.createLivros());
  }

  removeLivro(posicao: number){
    console.log(this.vinculoForm);
    this.vinculoForm.controls.livros.value.splice(posicao);
    this.livros.controls.splice(posicao);
  }*/

  createLivros(): FormGroup{
    return this.formBuilder.group({
      id: [''],
      user: [''],
      titulo: [''],
      autor: [''],
      ano: [''],
      categoria: [''],
      foto: [''],
      numero:  ['', [Validators.required]],
      tipo:  ['', [Validators.required]]
    });
  }

  open(content) {
    this.verificaLivrosVinculados();
    this.modalService.open(content, {ariaLabelledBy:  'modal-basic-title'}).result.then((result)  => {
      this.closeResult  =  `Closed with:  ${result}`;
      alert('Vinculo realizado com sucesso!!');
    }, (reason)  => {
      this.closeResult  =  `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  info(content, livros: any) {
    this.livrosInfo = livros;
    this.modalService.open(content, {ariaLabelledBy:  'modal-basic-title'}).result.then((result)  => {
      this.closeResult  =  `Closed with:  ${result}`;
    }, (reason)  => {
      this.closeResult  =  `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  getDismissReason(reason: any): string {
    if (reason  ===  ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason  ===  ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with:  ${reason}`;
    }
  }
}
