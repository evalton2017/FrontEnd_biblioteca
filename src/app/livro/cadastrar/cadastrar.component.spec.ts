import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ActivatedRoute, RouterModule, Router } from '@angular/router';
import { FormBuilder, NgForm, FormsModule } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NbTreeGridModule, NbThemeModule,
  NbLayoutModule, NbSidebarModule, NbCardModule, NbIconModule, NbButtonModule, NbSelectModule, NbAccordionModule } from '@nebular/theme';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CommonModule } from '@angular/common';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { of, Observable } from 'rxjs';
import { LivroService } from 'src/app/service/livro.service';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { LivroRoutingModule } from '../livro-routing.module';
import { Livro } from 'src/app/model/livro.model';
import { CadastrarComponent } from './cadastrar.component';
import { API_CONFIG } from 'src/app/config/api.config';

const mockLivros = [{
  id: 12,
  user: { id: 1, nome: 'fulano'},
  titulo: 'teste',
  autor: 'teste',
  ano: 'teste',
  categoria: 'teste',
  foto: 'teste',
}];

const mockLivro = {
  id: 12,
  user: { id: 1, nome: 'fulano'},
  titulo: 'teste',
  autor: 'teste',
  ano: 'teste',
  categoria: 'teste',
  foto: 'teste',
}

const  url = `${API_CONFIG.baseUrl}/livro`;

describe('CadastrarComponent', () => {
  let component: CadastrarComponent;
  let fixture: ComponentFixture<CadastrarComponent>;
  let livroServiceSub: Partial<LivroService>;
  let service: LivroService;
  let httpMock: HttpTestingController;

  const fakeActivatedRoute = {
    snapshot: { data: {  } }
  } as ActivatedRoute;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CadastrarComponent
       ],
       imports: [
        HttpClientModule,
        HttpClientTestingModule,
        AppRoutingModule,
        RouterTestingModule.withRoutes([]),
        FormsModule,
        CommonModule,
        RouterModule,
        LivroRoutingModule,
        FormsModule,
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
         {provide: NgForm, useValue: NgForm},
         {provide: Livro, useValue: Livro}  ,
       ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    service = TestBed.inject(LivroService);
    fixture = TestBed.createComponent(CadastrarComponent);
    component = fixture.componentInstance;
    component.livro = new Livro();
    fixture.detectChanges();
  });

  it('Deve ser criado', () => {
    expect(component).toBeTruthy();
  });

  it('visualiza Imagem', () => {
    component.visualizarImagem('assets/img/livros.jpg');
    expect(component.visualizarImagem).toBeDefined();
  });

  it('cadastrar', () => {
   const livro = mockLivro;
   const response = mockLivro;
   component.cadastrar();
   service.cadastrar(mockLivro).subscribe(response => {
    expect(response).toBeTruthy();
  });
  const httpRequest = httpMock.expectOne(`${url}/cadastrar`);
   expect(component.cadastrar).toBeDefined(livro);
  });
  
 
});
