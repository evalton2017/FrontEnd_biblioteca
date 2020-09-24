import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LivroComponent } from './livro.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppRoutingModule } from '../app-routing.module';
import { RouterTestingModule } from '@angular/router/testing';
import { LivroService } from '../service/livro.service';
import { ActivatedRoute, RouterModule, Router } from '@angular/router';
import { FormBuilder, NgForm, FormsModule } from '@angular/forms';
import { NbTreeGridModule, NbThemeModule, NbLayoutModule, NbSidebarModule, NbCardModule,
  NbIconModule, NbButtonModule, NbSelectModule, NbAccordionModule } from '@nebular/theme';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CommonModule } from '@angular/common';
import { LivroRoutingModule } from './livro-routing.module';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { of } from 'rxjs';
import { Livro } from '../model/livro.model';

const mockLivros = [{
  id: 12,
  user: {id: 1, nome: 'fulano'},
  titulo: 'teste',
  autor: 'teste',
  ano: 'teste',
  categoria: 'teste',
  foto: 'teste',
}];

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
         {provide: Livro, useValue: Livro}

       ]
    })
    .compileComponents();
    httpClient = TestBed.inject(HttpClient);
    livroService = TestBed.inject(LivroService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LivroComponent);
    component = fixture.componentInstance;
    component.livros = mockLivros;
    fixture.detectChanges();
  });

  it('Deve ser criado', () => {
    expect(component).toBeTruthy();
  });

  it('pesquisa', () => {
    component.pesquisar();
    expect(component.pesquisa).toBeDefined();
  });

  it('editar', () => {
    component.editar(1);
    expect(component.editar).toBeDefined();
  });
  

});
