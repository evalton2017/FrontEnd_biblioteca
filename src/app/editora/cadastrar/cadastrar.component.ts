import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, NgForm, FormBuilder, Validators, FormArray } from '@angular/forms';
import {Editora} from '../../model/editora.model';
import { ActivatedRoute, Router } from '@angular/router';
import {EditoraService} from '../../service/editora.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  editoraForm: FormGroup;
  editora:Editora;
  editoras:Editora[];
  closeResult: string;
  public paginaAtual = 1;

  constructor(
    private editoraService:EditoraService,
    private route:ActivatedRoute,
    private router:Router,
    private formBuilder: FormBuilder,
    private modalService: NgbModal) { }

  ngOnInit() {  
    this.listar();
    this.editoraForm = this.formBuilder.group({
      nomeFantasia: [null, [Validators.required]],
      cnpj: [null, [Validators.required]],
      cep: [null, [Validators.required]],
      logradouro: [null, [Validators.required]],
      bairro: [null, [Validators.required]],
      complemento: [null],
      localidade: [null, [Validators.required]],
      uf: [null, [Validators.required]],
      numero: [null, [Validators.required]],
      contatos: this.formBuilder.array([this.createContatos()])
    });

  }

  get contatos():FormArray{
    return this.editoraForm.get("contatos") as FormArray;
  }

  addTelefone(){
    this.contatos.push(this.createContatos());
  }

  removeTelefone(posicao:number){
    this.editoraForm.controls.contatos.value.splice(posicao)
    this.contatos.controls.splice(posicao);
  }

  createContatos() :FormGroup{
    return this.formBuilder.group({
      numero: ['', [Validators.required]],
      tipo: ['', [Validators.required]]
    })
  }


  listar(){
    this.editoraService.listar()
      .subscribe(response=>{
        this.editoras=response;
      },
        error=>{
          alert("erro ao consultar usuarios");
        }
      
      )
  }

  cadastrar(){
    this.editora = this.editoraForm.value;
    this.editoraService.cadastrar(this.editora)
    .subscribe(response=>{
      this.listar();
      this.editora=new Editora();
    },
      error=>{
        let erro = JSON.parse(error.error);
        alert(erro.errors[0].message);
      }
    )

  }

  buscaCep(){
    let validacep = /^[0-9]{8}$/;
    const valcep = this.editoraForm.value.cep;
    if(validacep.test(valcep)){       
      this.editoraService.buscaCep(this.editoraForm.value.cep)
      .subscribe(response => {
        this.setEndereco(response);
      },
      error=>{
        alert("CEP inexistente!!");
      });
    }else{
      alert("CEP inexistente!!"); 
      this.editoraForm.patchValue({
        cep:null
      });
      console.log(this.editoraForm);
    }
  }

  setEndereco(endereco:any){
    this.editoraForm.patchValue({
      logradouro:endereco.logradouro,
      bairro:endereco.bairro,
      uf:endereco.uf,
      localidade:endereco.localidade
    });
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
      alert("Usuario Cadastrado com sucesso!!")
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

}
