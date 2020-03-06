import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Livro } from 'src/app/model/livro.model';
import { LivroService } from 'src/app/service/livro.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  @ViewChild('formLivro', {static:true}) formLivro:NgForm;
  livro:Livro;
  formData = new FormData();

  constructor(
    private livroService:LivroService,
    private router:Router
  ) { }

  ngOnInit() {
    this.livro=new Livro();
  }

  cadastrar():void{
    console.log(this.livro.foto);
    console.log(this.formLivro);
    this.livroService.cadastrar(this.livro)
      .subscribe(response=>{
        
      },
        error=>{}
      )



  }

  inputFileChange(event){
    if(event.target.files && event.target.files[0]){
      const foto = event.target.files[0];
    
      this.formData.append('foto',foto);
      console.log(this.formData);
    }
  }

}
