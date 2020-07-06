import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LivroComponent } from './livro.component';
import { LivroRoutingComponent } from './livro-routing.component';
import { LivroRoutingModule } from './livro-routing.module';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { 
  NbThemeModule,
  NbLayoutModule,
  NbTreeGridModule,
  NbSidebarModule,
  NbCardModule,
  NbIconModule,
  NbTreeGridFooterRowDefDirective,
  NbTreeGridHeaderRowDefDirective, 
  NbTreeGridRowDefDirective, 
  NbButtonModule, 
  NbSelectModule, 
  NbAccordionModule
} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';


@NgModule({
  declarations: [
    LivroComponent,
    LivroRoutingComponent,
    CadastrarComponent,
  ],
  providers:[
    NbTreeGridFooterRowDefDirective,
    NbTreeGridHeaderRowDefDirective,
    NbTreeGridRowDefDirective,
  ],
  imports: [
    CommonModule,
    RouterModule,
    LivroRoutingModule,
    FormsModule,
    //Modulos Nebular
    NbThemeModule.forRoot(),
    NbLayoutModule,
    NbTreeGridModule,
    NbSidebarModule.forRoot(),
    NbCardModule,
    NbIconModule,
    NbEvaIconsModule,    
    NbButtonModule,
    NbSelectModule,
    NbAccordionModule,     
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA],
})
export class LivroModule { }
