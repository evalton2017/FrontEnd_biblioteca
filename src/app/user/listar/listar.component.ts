import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { User } from 'src/app/model/user.model';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Telefone } from 'src/app/model/telefone';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  closeResult: string;
  @ViewChild('modalEditar') public modalEditar:ElementRef;
  userForm: FormGroup;
  user: User;
  users:User[];
  lista:boolean = false;

  constructor(
    private userService:UserService,
    private route:ActivatedRoute,
    private router:Router,
    private formBuilder: FormBuilder,
    private modalService: NgbModal) { }

  ngOnInit() {
    this.listar();
    this.userForm = this.formBuilder.group({
      nome: [null, [Validators.required]],
      email: [null, [Validators.required]],
      perfil: [null],
      senha: [null, [Validators.required]],
      telefones: this.formBuilder.array([])
    });
  }

  listar(){
    this.userService.listar()
      .subscribe(response=>{
        this.users=response;
        if(this.users.length>0){
          this.lista=true;
        }
      },
      error=>{
        alert("Erro ao listar os usuarios!!")
      });
  }

  editar(user: User){
      this.userForm = this.formBuilder.group({
      id:[user.id],
      nome: [user.nome, [Validators.required]],
      email: [user.email, [Validators.required]],
      perfil: [user.perfil],
      telefones: this.formBuilder.array([])
    });
    this.carregarTelefone(user);
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
      alert("Usuario Altedo com sucesso!!")
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

  alterar(){    
    this.user = new User();
    this.user = this.userForm.value;
    this.userService.atualizar(this.user)
    .subscribe(response=>{
    },
      error=>{
        alert(error.error.message);
      }
    )

  }

  carregarTelefone(user:User){
    user.telefones.forEach(t =>{
        this.telefones.push(this.carregaTelefones(t));
    })
  }

  get telefones():FormArray{
    return this.userForm.get("telefones") as FormArray;
  }

  addTelefone(){
    this.telefones.push(this.setTelefones());
  }

  removeTelefone(posicao:number){
    this.userForm.controls.telefones.value.splice(posicao)
    this.telefones.controls.splice(posicao);
  }

  carregaTelefones(telefone:Telefone) :FormGroup{
    return this.formBuilder.group({
      id: [telefone.id],
      numero: [telefone.numero, [Validators.required]],
      tipo: [telefone.tipo, [Validators.required]]
    })
  }

  setTelefones() :FormGroup{
    return this.formBuilder.group({
      numero: ['', [Validators.required]],
      tipo: ['', [Validators.required]]
    })
  }

}
