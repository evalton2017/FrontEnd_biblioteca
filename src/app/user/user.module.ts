import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserComponent } from './user.component';
import{UserService} from '../service/user.service'
import { ListarComponent } from './listar/listar.component';
import { UserRoutingComponent } from './user-routing.component';
import { UserRoutingModule } from './user-routing.module';
import { CadastrarComponent } from './cadastrar/cadastrar.component';


@NgModule({
  declarations: [
    UserComponent,
    ListarComponent,
    UserRoutingComponent,
    CadastrarComponent
  
  ],
  providers:[
    UserService
  ],
  imports: [
    CommonModule,
    RouterModule,
    UserRoutingModule,
    FormsModule, 
    ReactiveFormsModule,

  ]
})
export class UserModule { }
