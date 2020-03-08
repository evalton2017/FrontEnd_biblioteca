import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Livro } from 'src/app/model/livro.model';
import { LivroService } from 'src/app/service/livro.service';
import { Router } from '@angular/router';
import { renderFlagCheckIfStmt } from '@angular/compiler/src/render3/view/template';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  @ViewChild('formLivro', {static:true}) formLivro:NgForm;
  livro:Livro;
  formData = new FormData();
  public imagePath;
  imgURL:any='';

  constructor(
    private livroService:LivroService,
    private router:Router
  ) { }

  ngOnInit() {
    this.livro=new Livro();
    console.log(this.livro)
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

  visualizarImagem(event){

    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      this.imagePath = event.target.files;
      reader.readAsDataURL(event.target.files[0]); 
      reader.onload = (event) => { 
        this.imgURL = reader.result; 
        
      }
    }      

  }

}
