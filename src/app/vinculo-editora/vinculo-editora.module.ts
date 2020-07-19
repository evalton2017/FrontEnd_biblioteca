import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
  NbTableModule,
  NbCheckboxModule,
  NbListModule
} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { CompleterService } from '@akveo/ng2-completer';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { VinculoEditoraRoutingModule } from './vinculo-editora-routing.module';
import { VinculoEditoraComponent } from './vinculo-editora.component';
import { VinculoEditoraRoutingComponent } from './vinculo-editora-routing.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';


@NgModule({
  declarations: [
    VinculoEditoraComponent,
    VinculoEditoraRoutingComponent,
    CadastrarComponent

  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    //Modulos Nebular
    NbThemeModule.forRoot(),
    NbLayoutModule,
    NbListModule,
    NbTableModule,
    NbTreeGridModule,
    NbSidebarModule.forRoot(),
    NbCardModule,
    NbIconModule,
    NbEvaIconsModule,    
    NbButtonModule,
    NbSelectModule,
    NbLayoutModule,
    NbCheckboxModule,
    NbAccordionModule,
    NbCardModule, 
    Ng2SmartTableModule,
    NgxPaginationModule,
      
    VinculoEditoraRoutingModule,
    
  ]
})
export class VinculoEditoraModule { }
