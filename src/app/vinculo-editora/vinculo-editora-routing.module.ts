import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { VinculoEditoraRoutingComponent } from './vinculo-editora-routing.component';
import {VinculoEditoraComponent} from './vinculo-editora.component';
import {CadastrarComponent} from './cadastrar/cadastrar.component'

export const VinculoEditoraRoutes:Routes = [
    {
        path:'vinculo-editora',
        component:VinculoEditoraRoutingComponent,
        children: [
            {
                path:'',
                component:VinculoEditoraComponent
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
        RouterModule.forChild(VinculoEditoraRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class VinculoEditoraRoutingModule{}
