import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {EditoraRoutingComponent} from './editora-routing.component';
import {EditoraComponent} from './editora.component';
import {CadastrarComponent} from './cadastrar/cadastrar.component';

export const EditoraRoutes:Routes = [
    {
        path:'editora',
        component:EditoraRoutingComponent,
        children: [
            {
                path:'',
                component:EditoraComponent
            },
            {
                path:'cadastro',
                component:CadastrarComponent
            }
        
        ]
        
    },
   
];

@NgModule({
    imports:[
        RouterModule.forChild(EditoraRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class EditoraRoutingModule{}
