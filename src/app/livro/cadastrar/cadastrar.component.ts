import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Livro } from 'src/app/model/livro.model';
import { LivroService } from 'src/app/service/livro.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  @ViewChild('formLivro', {static:true}) formLivro:NgForm;
  @Input()livro:Livro;
  public imagePath;
  imgURL:any='';

  constructor(
    private livroService:LivroService,
    private router:Router,
    private route:ActivatedRoute
  ) { }

  ngOnInit() {
    this.livro=new Livro();
    this.route.params.subscribe((id:Params)=>{
      if(id){
        this.livroService.buscarPorId(id.id)
            .subscribe(response=>{
              console.log(response);
            })
      }     
    })
  }

  cadastrar():void{
    this.livro.foto= document.getElementById("imagem").getAttribute("src");
     this.livroService.cadastrar(this.livro)
      .subscribe(response=>{
        this.router.navigate(['livro'])
      },
        error=>{}
      )

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
