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
  NbAccordionModule,
  NbTable,
  NbTableModule
} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { CompleterService } from '@akveo/ng2-completer';


@NgModule({
  declarations: [
    LivroComponent,
    LivroRoutingComponent,
    CadastrarComponent,
  ],
  providers: [
    NbTreeGridFooterRowDefDirective,
    NbTreeGridHeaderRowDefDirective,
    NbTreeGridRowDefDirective,
    CompleterService
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    NbThemeModule.forRoot(),
    NbLayoutModule,
    NbTableModule,
    NbTreeGridModule,
    NbSidebarModule.forRoot(),
    NbCardModule,
    NbIconModule,
    NbEvaIconsModule,
    NbButtonModule,
    NbSelectModule,
    NbAccordionModule,
    Ng2SmartTableModule,
    LivroRoutingModule,
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA],
})
export class LivroModule { }
