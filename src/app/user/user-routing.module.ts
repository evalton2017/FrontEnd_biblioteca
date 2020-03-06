import {Routes, RouterModule} from '@angular/router';
import { NgModule } from '@angular/core';
import {UserComponent} from './user.component'
import { ListarComponent } from './listar/listar.component';
import { UserRoutingComponent } from './user-routing.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';

export const UserRoutes:Routes = [
    {
        path:'user',
        component:UserRoutingComponent,
        children: [
            {
                path:'',
                component:ListarComponent
            },
            {
                path:'home',
                component:UserComponent
            },
            {
                path:'cadastrar',
                component:CadastrarComponent
            },
        ]
        
    },
   
];

@NgModule({
    imports:[
        RouterModule.forChild(UserRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class UserRoutingModule{}