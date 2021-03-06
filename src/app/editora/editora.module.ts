import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditoraComponent } from './editora.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import {
  NbThemeModule,
  NbLayoutModule,
  NbTreeGridModule,
  NbSidebarModule,
  NbCardModule,
  NbIconModule,
  NbButtonModule,
  NbSelectModule,
  NbAccordionModule,
  NbTableModule
} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { CompleterService } from '@akveo/ng2-completer';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {EditoraRoutingModule} from './editora-routing.module';
import { EditoraRoutingComponent } from './editora-routing.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations:
    [
      EditoraComponent,
      EditoraRoutingComponent,
      CadastrarComponent,
    ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
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
    SharedModule,
    NgxPaginationModule,
    EditoraRoutingModule,
  ]
})
export class EditoraModule { }
