import {Routes, RouterModule} from '@angular/router';
import { LivroRoutingComponent } from './livro-routing.component';
import { LivroComponent } from './livro.component';
import { NgModule } from '@angular/core';
import { CadastrarComponent } from './cadastrar/cadastrar.component';

export const LivroRoutes:Routes = [
    {
        path:'livro',
        component:LivroRoutingComponent,
        children: [
            {
                path:'',
                component:LivroComponent
            },
            {
                path:'cadastro',
                component:CadastrarComponent
            },
        
        ]
        
    },
   
];

@NgModule({
    imports:[
        RouterModule.forChild(LivroRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class LivroRoutingModule{}
