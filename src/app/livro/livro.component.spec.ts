import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LivroComponent } from './livro.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppRoutingModule } from '../app-routing.module';
import { RouterTestingModule } from '@angular/router/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { LivroService } from '../service/livro.service';
import { ActivatedRoute, RouterModule, Router } from '@angular/router';
import { FormBuilder, NgForm, FormsModule } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NbTreeGridModule, NbThemeModule, NbLayoutModule, NbSidebarModule, NbCardModule, NbIconModule, NbButtonModule, NbSelectModule, NbAccordionModule } from '@nebular/theme';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CommonModule } from '@angular/common';
import { LivroRoutingModule } from './livro-routing.module';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { of } from 'rxjs';
import { Livro } from '../model/livro.model';

describe('LivroComponent', () => {
  let component: LivroComponent;
  let fixture: ComponentFixture<LivroComponent>;
  let livroService: LivroService;
  let httpClient: HttpClient;

  const fakeActivatedRoute = {
    snapshot: { data: {  } }
  } as ActivatedRoute;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
         LivroComponent
       ],
       imports:[
        HttpClientModule,
        HttpClientTestingModule,
        AppRoutingModule,
        RouterTestingModule.withRoutes([]),
        FormsModule,
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
      // schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
       providers: [
        {provide: Router, useValue: {navigate: () => {}}},
        {provide: ActivatedRoute, useValue: {
            params: of({id: 123})
          }},
      
        {provide: LivroService, useValue: {
          listar: () => of({id: 123, titulo: 'Titulo', autor:'Fulano', ano:'2020'})
         }},
         {provide: NgForm, useValue:NgForm},  
         {provide: Livro, useValue:Livro}
        
                 
       ]
    })
    .compileComponents();
    //Mock Service
    httpClient = TestBed.get(HttpClient)
    livroService = TestBed.inject(LivroService);
   
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LivroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Deve ser criado', () => {
    expect(component).toBeTruthy();
  });

 /* it('Deve listar livro', () => {
    livroService = {
      listar().subscribe(response=>{
        this.lista=response;
        this.livroToTreeNodes(response);
      },error=>{
        alert("Erro ao listar livros");
      });
    }
  });*/
});
