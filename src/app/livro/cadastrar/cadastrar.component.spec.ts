import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarComponent } from './cadastrar.component';
import { LivroService } from 'src/app/service/livro.service';
import { HttpClient, HttpClientModule, HttpParams } from '@angular/common/http';
import { ActivatedRoute,Params, Router, RouterModule } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { RouterTestingModule } from '@angular/router/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormBuilder, NgForm, FormsModule } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Livro } from 'src/app/model/livro.model';
import { HttpClientTestingModule,
  HttpTestingController } from '@angular/common/http/testing';
import { Observable, of } from 'rxjs';
import { CommonModule } from '@angular/common';
import { LivroRoutingModule } from '../livro-routing.module';
import { NbThemeModule, NbLayoutModule, NbTreeGridModule, NbSidebarModule, NbCardModule, NbIconModule, NbButtonModule, NbSelectModule, NbAccordionModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';

describe('CadastrarComponent', () => {
  let component: CadastrarComponent;
  let fixture: ComponentFixture<CadastrarComponent>;
  let livroService: LivroService;
  let httpClient: HttpClient;
  let formLivro: NgForm;
  let livro: Livro;
  let httpTestingController: HttpTestingController;
  let livroServiceSub: LivroService; 
  let router: Router;

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
          buscarPorId: (id) => of({id: 123, titulo: 'Titulo', autor:'Fulano', ano:'2020'})
         }},
         {provide: NgForm, useValue:NgForm},  
         {provide: Livro, useValue:Livro}
        
                 
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
    livroService = TestBed.get(LivroService);
    router = TestBed.get(Router);

    fixture.detectChanges();
  }); 

  it('Componente criado', () => {
    expect(component).toBeTruthy();
  });

  it('Deve chamar ngOnInit', () => {
    component.ngOnInit();
    fixture.detectChanges();

  });

  
});
