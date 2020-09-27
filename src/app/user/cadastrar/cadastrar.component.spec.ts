import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CadastrarComponent } from './cadastrar.component';
import { UserService } from 'src/app/service/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { RouterTestingModule } from '@angular/router/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Mock } from 'protractor/built/driverProviders';
import { Perfil } from 'src/app/model/perfil.model';
import { of, throwError } from 'rxjs';

const mockUser = {
  id: 10,
  nome: 'Fulano',
  email: 'fulano@gmail.com',
  perfil: Perfil.admin,
  senha: '123456',
};

const mockResposta: any = {
  status: 'OK',
  messages: [],
  data: {
    response: [
      {
        id: 10,
        nome: 'Fulano',
        email: 'fulano@gmail.com',
        perfil: Perfil.admin,
        senha: '123456',
      }
    ],
    completa: false
  },
  statusCode: 200
};


describe('CadastrarComponent-User', () => {
  let component: CadastrarComponent;
  let fixture: ComponentFixture<CadastrarComponent>;
  const formBuilder: FormBuilder = new FormBuilder();
  let service: UserService;
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
        AppRoutingModule,
        RouterTestingModule.withRoutes([])
       ],
       schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
       providers: [
         UserService,
         {
          provide: ActivatedRoute,
          useValue: fakeActivatedRoute
         },
         { provide: FormBuilder, useValue: formBuilder }
       ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarComponent);
    component = fixture.componentInstance;
    component.user = mockUser;
    fixture.detectChanges();
  });

  it('Componente Criado', () => {
    expect(component).toBeTruthy();
  });

  it('Componente editora criado', () => {
    expect(component).toBeTruthy();
  });

  it('addTelefone', () => {
    component.userForm = formBuilder.group({
      nome: ['fulano', [Validators.required]],
      email: ['teste@gmail.com', [Validators.required]],
      perfil: ['ADMIN'],
      senha: ['123456', [Validators.required]],
      telefones: formBuilder.array([formBuilder.group({
        numero: ['619265656565', [Validators.required]],
        tipo: ['COMERCIAL', [Validators.required]]
      })])
    });
    component.addTelefone();   
    expect(component.addTelefone).toBeDefined();
  });

  it('removeTelefone', () => {
    component.userForm = formBuilder.group({
      nome: ['fulano', [Validators.required]],
      email: ['teste@gmail.com', [Validators.required]],
      perfil: ['ADMIN'],
      senha: ['123456', [Validators.required]],
      telefones: formBuilder.array([formBuilder.group({
        numero: ['619265656565', [Validators.required]],
        tipo: ['COMERCIAL', [Validators.required]]
      })])
    });
    const posicao = 1;
    component.removeTelefone(posicao);
    expect(component.removeTelefone).toBeDefined();
  });

  it('listar', () => {
    service = TestBed.inject(UserService);
    spyOn(service, 'listar').and.returnValue(of(mockResposta));
    component.listar();   
    expect(component.listar).toBeDefined();
  });

  it('listar erro', () => {
    service = TestBed.inject(UserService);
    spyOn(service, 'listar').and.returnValue(throwError('error'));
    component.listar();   
    expect(component.listar).toBeDefined();
  });

  it('cadastrar', () => {
    service = TestBed.inject(UserService);
    spyOn(service, 'cadastrar').and.returnValue(of(mockResposta));
    component.cadastrar();   
    expect(component.cadastrar).toBeDefined();
  });

  
});
