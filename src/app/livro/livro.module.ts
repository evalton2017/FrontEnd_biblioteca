import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LivroComponent } from './livro.component';
import { LivroRoutingComponent } from './livro-routing.component';
import { LivroRoutingModule } from './livro-routing.module';
import { CadastrarComponent } from './cadastrar/cadastrar.component';


@NgModule({
  declarations: [
    LivroComponent,
    LivroRoutingComponent,
    CadastrarComponent
  ],
  providers:[
    
  ],
  imports: [
    CommonModule,
    RouterModule,
    LivroRoutingModule,
    FormsModule
  ]
})
export class LivroModule { }
