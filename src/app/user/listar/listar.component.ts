import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { User } from 'src/app/model/user.model';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  users:User[];

  constructor(private userService:UserService) { }

  ngOnInit() {
    this.listar();
  }

  listar(){
    this.userService.listar()
      .subscribe(response=>{
        this.users=response;
      },
      error=>{
        alert("Erro ao listar os usuarios!!")
      });
  }

}
