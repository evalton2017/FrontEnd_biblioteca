import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, ReactiveFormsModule, FormGroup, FormControl, FormBuilder, FormArray, Validators } from '@angular/forms';
import { User } from 'src/app/model/user.model';
import { UserService } from 'src/app/service/user.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  userForm: FormGroup;

  @ViewChild('formUser',{static:true}) formUser:NgForm
  user:User;
  users:User[];

  constructor(
    private userService:UserService,
    private route:ActivatedRoute,
    private router:Router,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
  
    this.userForm = this.formBuilder.group({
      nome: [null, [Validators.required]],
      email: [null, [Validators.required]],
      perfil: [null],
      senha: [null, [Validators.required]],
      telefones: this.formBuilder.array([this.createTelefones()])
    });

  }

  get telefones():FormArray{
    return this.userForm.get("telefones") as FormArray;
  }

  addTelefone(){
    this.telefones.push(this.createTelefones());
  }

  removeTelefone(posicao:number){
    this.userForm.controls.telefones.value.splice(posicao)
    this.telefones.controls.splice(posicao);
  }

  createTelefones() :FormGroup{
    return this.formBuilder.group({
      numero: ['', [Validators.required]],
      tipo: ['', [Validators.required]]
    })
  }


  listar(){
    this.userService.listar()
      .subscribe(response=>{
        this.users=response;
      },
        error=>{
          alert("erro ao consultar usuarios");
        }
      
      )
  }

  cadastrar(){
    this.user = this.userForm.value;
    this.userService.cadastrar(this.user)
    .subscribe(response=>{
      this.listar();
      this.user=new User();
      this.router.navigate(['user'])
    },
      error=>{
        let erro = JSON.parse(error.error);
        alert(erro.errors[0].message);
      }
    )

  }

}
