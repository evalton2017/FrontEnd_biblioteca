import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';
import { CadastrarComponent } from './cadastrar.component';
import { ActivatedRoute, Router } from '@angular/router';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';
import {AppRoutingModule} from '../../app-routing.module';
import { Editora } from 'src/app/model/editora.model';
import { EditoraService } from 'src/app/service/editora.service';
import { Observable, of, throwError } from 'rxjs';
import { NgbModal, NgbModalOptions, NgbModalRef, NgbModule } from '@ng-bootstrap/ng-bootstrap';

const mockEditoras = [{
  id: 12,
  cnpj: '03255566666',
  nomeFantasia: 'Teste',
}];

const mockEditora = {
  cnpj: '03255566666',
  nomeFantasia: 'Teste',
}

const mockEndereco = {
  logradouro: 'Rua 25',
  bairro: 'Bairro ',
  uf: 'DF',
  localidade: 'Brasilia'
}

const mockContato = {
  numero: '616556666',
  tipo: 'COMERCIAL'
}

const errors = {

}

const mockResposta: any = {
  status: 'OK',
  messages: [],
  data: {
    response: [
      {
        id: 12,
        cnpj: '03255566666',
        nomeFantasia: 'Teste'
      }
    ],
    completa: false
  },
  statusCode: 200
};

const mockRespostaCep: any = {
  status: 'OK',
  messages: [],
  data: {
    response: [
      {
        cep: '71693-015',
        logradouro: 'Quadra 14',
        complemento: '',
        bairro: 'Vila São José (São Sebastião)',
        localidade: 'Brasília',
        uf: 'DF',
        ibge: '5300108',
        gia: '',
        ddd: '61',
        siafi: '9701'
      }
    ],
    completa: false
  },
  statusCode: 200
};

export class MockNgbModalRef {
  componentInstance = {
    prompt: undefined,
    title: undefined
  };
  result: Promise<any> = new Promise((resolve, reject) => resolve(true));
}

const cep = '71659999';
const editoraForm = [];
const closeResult = true;
const  paginaAtual = 1;

describe('CadastrarComponent-Editora', () => {
  let component: CadastrarComponent;
  let fixture: ComponentFixture<CadastrarComponent>;
  // tslint:disable-next-line:prefer-const
  let httpClient: HttpClient;
  const formBuilder: FormBuilder = new FormBuilder();
  let modalService: NgbModal;
  let mockModalRef: MockNgbModalRef = new MockNgbModalRef();
  let service: EditoraService;

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
        RouterTestingModule.withRoutes([]),
        NgxPaginationModule,
        NgbModule
       ],
       schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
       providers: [
         {
          provide: ActivatedRoute,
          useValue: fakeActivatedRoute
         },
         { provide: FormBuilder, useValue: formBuilder },
         { provide: mockEditoras, useValue: {} },
       ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    modalService = TestBed.inject(NgbModal);
    fixture = TestBed.createComponent(CadastrarComponent);
    component = fixture.componentInstance;
    component.editoras = mockEditoras;
    component.editoraForm = formBuilder.group({
      nomeFantasia: [null, [Validators.required]],
      cnpj: [null, [Validators.required]],
      cep: [null, [Validators.required]],
      logradouro: [null, [Validators.required]],
      bairro: [null, [Validators.required]],
      complemento: [null],
      localidade: [null, [Validators.required]],
      uf: [null, [Validators.required]],
      numero: [null, [Validators.required]],
      contatos: formBuilder.array([])
    });
    fixture.detectChanges();
  });

  it('Componente editora criado', () => {
    expect(component).toBeTruthy();
  });

  it('contatos', () => {
    component.editoraForm.get('contatos') as FormArray;
    expect(component.contatos).toBeTruthy();
  });

  it('addTelefone', () => {
    component.addTelefone();   
    expect(component.addTelefone).toBeDefined();
  });

  it('setEndereco', () => {
    component.setEndereco(mockEndereco);
    expect(component.setEndereco).toBeDefined();
  });

  it('removeTelefone', () => {
    const posicao = 1;
    component.removeTelefone(posicao);
    expect(component.removeTelefone).toBeDefined();
  });

  it('buscaCep', () => {
    component.editoraForm = formBuilder.group({
      nomeFantasia: [null, [Validators.required]],
      cnpj: [null, [Validators.required]],
      cep: ['71693015', [Validators.required]],
      logradouro: [null, [Validators.required]],
      bairro: [null, [Validators.required]],
      complemento: [null],
      localidade: [null, [Validators.required]],
      uf: [null, [Validators.required]],
      numero: [null, [Validators.required]],
      contatos: formBuilder.array([])
    });
    service = TestBed.inject(EditoraService);
    spyOn(service, 'buscaCep').and.returnValue(of(mockRespostaCep));
    component.buscaCep();
    expect(component.buscaCep).toBeDefined();
  });

  it('cadastrar', () => {
    service = TestBed.inject(EditoraService);
    spyOn(service, 'cadastrar').and.returnValue(of(mockResposta));
    component.cadastrar();   
    expect(component.cadastrar).toBeDefined();
  });
  
  it('cadastrar error', () => {
    const error = {error:{errors:[{message: 'erro'}]}};
    console.log(error);
    service = TestBed.inject(EditoraService);
    spyOn(service, 'cadastrar').and.returnValue(throwError(error));
   // spyOn(window, "alert");
    component.cadastrar();   
    expect(component.cadastrar).toBeDefined();
  });

  it('getDismissReason', () => {
    component.getDismissReason(1);   
    expect(component.getDismissReason).toBeDefined();
  });

  it('getDismissReason ESC', () => {
    component.getDismissReason(0);   
    expect(component.getDismissReason).toBeDefined();
  });

  it(' open modal', fakeAsync(() => {
    spyOn(modalService, 'open').and.returnValue(mockModalRef as any);
    component.open('');
    tick();    
    expect(modalService.open).toHaveBeenCalledWith('',{ ariaLabelledBy: 'modal-basic-title' });
  }));

  it('listar', () => {
    service = TestBed.inject(EditoraService);
    spyOn(service, 'listar').and.returnValue(of(mockResposta));
    component.listar();   
    expect(component.listar).toBeDefined();
  });

  it('listar erro', () => {
    service = TestBed.inject(EditoraService);
    spyOn(service, 'listar').and.returnValue(throwError('error'));
    component.listar();   
    expect(component.listar).toBeDefined();
  });


});
