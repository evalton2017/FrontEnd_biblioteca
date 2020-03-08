import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/model/user.model';
import { UserService } from 'src/app/service/user.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  @ViewChild('formUser',{static:true}) formUser:NgForm
  user:User;
  users:User[];

  constructor(
    private userService:UserService,
    private route:ActivatedRoute,
    private router:Router) { }

  ngOnInit() {
    this.user = new User();
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
    this.user.telefones.push(this.user.telefone)
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
