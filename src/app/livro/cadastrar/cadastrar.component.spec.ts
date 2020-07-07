import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarComponent } from './cadastrar.component';
import { LivroService } from 'src/app/service/livro.service';
import { HttpClient, HttpClientModule, HttpParams } from '@angular/common/http';
import { ActivatedRoute,Params, Router } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { RouterTestingModule } from '@angular/router/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormBuilder, NgForm, FormsModule } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Livro } from 'src/app/model/livro.model';
import { HttpClientTestingModule,
  HttpTestingController } from '@angular/common/http/testing';
import { Observable } from 'rxjs';

describe('CadastrarComponent', () => {
  let component: CadastrarComponent;
  let fixture: ComponentFixture<CadastrarComponent>;
  let livroService: LivroService;
  let httpClient: HttpClient;
  let formLivro: NgForm;
  let livro: Livro;
  let subscribe: Params;
  let httpTestingController: HttpTestingController;
  
  let mockSomeService = {
    getData: () => {}
  }

  const fakeActivatedRoute = {
    snapshot: { data: {  } }
  } as ActivatedRoute;

  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
         CadastrarComponent
       ],
       imports:[
        HttpClientModule,
        HttpClientTestingModule,
        AppRoutingModule,
        RouterTestingModule.withRoutes([]),
        FormsModule
       ],
       schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
       providers: [
         LivroService,
         {
          provide: ActivatedRoute,
          useValue: fakeActivatedRoute, mockSomeService 
         },
         HttpClient,
         FormBuilder,
         NgbModal,
         NgForm,
         Livro,      
                 
       ]
    })
    .compileComponents();


    //Mock Service
    httpTestingController = TestBed.get(HttpTestingController);
    livroService = TestBed.inject(LivroService);
    livro = TestBed.inject(Livro);
    formLivro = TestBed.get(NgForm);
  
  }));

  afterEach(() => {
    httpTestingController.verify();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

 

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
