import { async, ComponentFixture, TestBed, inject, tick, fakeAsync } from '@angular/core/testing';
import { ListarComponent } from './listar.component';
import { UserService } from 'src/app/service/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/model/user.model';
import { Perfil } from 'src/app/model/perfil.model';
import { HttpClientModule, HttpClient, HttpHandler } from '@angular/common/http';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormArray } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable, of } from 'rxjs';
import { tipoTelefone } from 'src/app/model/tipoTelefone';

const mockLivros = [{
  id: 12,
  user: {id: 1, nome: 'fulano'},
  titulo: 'teste',
  autor: 'teste',
  ano: 'teste',
  categoria: 'teste',
  foto: 'teste',
}];

const mockUser = {
  id: 1,
  nome: 'fulano',
  telefones:[
    {
        id: 1,
        numero: '5561991383624',
        tipo: tipoTelefone.COMERCIA
      }
    ]
}

const mockRespostaListar = [{
  status: 'OK',
  messages: [],
  data:
    [
      {
        id: 1,
        nome: 'Duke Gomes de Sousa',
        email: 'duke.ndsg@gmail.com',
        livro: [],
        telefones:[
          {
              id: 1,
              numero: '5561991383624',
              tipo: 'COMERCIAL'
            }
          ],
          perfil: 'ROLE_ADMIN'
      }
  ]
}];

const users: User [] = [
  {id: 12, nome: 'Duke Gomes', email: 'duke@gmail.com', perfil: Perfil.admin, },
  {id: 15, nome: 'Fulano da silva', email: 'fulano@gmail.com', perfil: Perfil.usuario}
];

export class MockNgbModalRef {
  componentInstance = {
    prompt: undefined,
    title: undefined
  };
  result: Promise<any> = new Promise((resolve, reject) => resolve(true));
}


describe('ListarComponent', () => {
  const fakeActivatedRoute = {
    snapshot: { data: {  } }
  } as ActivatedRoute;

  let component: ListarComponent;
  let fixture: ComponentFixture<ListarComponent>;
  let userServiceSub: Partial<UserService>;
  let httpClient: HttpClient;
  let modalService: NgbModal;
  let mockModalRef: MockNgbModalRef = new MockNgbModalRef();
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
         ListarComponent
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
         HttpClient,
         FormBuilder,
         NgbModal,
       ]
    })
    .compileComponents();
    httpClient = TestBed.inject(HttpClient);
  }));

  beforeEach(() => {
    modalService = TestBed.inject(NgbModal);
    fixture = TestBed.createComponent(ListarComponent);
    component = fixture.componentInstance;
    component.users = users;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create', () => {
    component.carregarTelefone(mockUser);
    expect(component.carregarTelefone).toBeDefined();
  });

  it('telefones', () => {
    component.userForm.get('telefones') as FormArray;
    expect(component.telefones).toBeTruthy();
  });

  it('addTelefone', () => {
    component.addTelefone();   
    expect(component.addTelefone).toBeDefined();
  });

  it('removeTelefone', () => {
    const posicao = 1;
    component.removeTelefone(posicao);
    expect(component.removeTelefone).toBeDefined();
  });

  it(' open modal', fakeAsync(() => {
    spyOn(modalService, 'open').and.returnValue(mockModalRef as any);
    component.open('');
    tick();    
    expect(modalService.open).toHaveBeenCalledWith('',{ ariaLabelledBy: 'modal-basic-title' });
  }));

  it('alterar', () => {
    component.alterar();   
    expect(component.alterar).toBeDefined();
  });

  it('editar', () => {
    component.editar(mockUser);   
    expect(component.editar).toBeDefined();
  });

  it('getDismissReason', () => {
    component.getDismissReason('ModalDismissReasons.ESC');   
    expect(component.getDismissReason).toBeDefined();
  });
  
});

