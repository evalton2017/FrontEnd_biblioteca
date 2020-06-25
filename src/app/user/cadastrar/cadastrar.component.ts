import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, ReactiveFormsModule, FormGroup, FormControl, FormBuilder } from '@angular/forms';
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
      nome: [null],
      email: [null],
      perfil: [null],
      senha: [null],
      telefones: this.formBuilder.array([this.addTelefone()])

    });

  }

  addTelefone() :FormGroup{
    return this.formBuilder.group({
      numero: [''],
      tipo: ['']
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
   // this.user.telefones.push(this.user.telefone)
   console.log(this.userForm);
   return false;
    this.userService.cadastrar(this.user)
    .subscribe(response=>{
      this.listar();
      this.user=new User();
      this.router.navigate(['user'])
    },
      error=>{
        alert("Erro ao tentar salvar")
      }
    )

  }


}
