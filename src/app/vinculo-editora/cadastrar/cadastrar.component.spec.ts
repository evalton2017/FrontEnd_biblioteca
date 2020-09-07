import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { CadastrarComponent } from './cadastrar.component';
import { UserService } from 'src/app/service/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormArray, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { RouterTestingModule } from '@angular/router/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Livro } from 'src/app/model/livro.model';
import { VinculoEditoraService } from 'src/app/service/vinculo-editora.service';
import { Observable, of } from 'rxjs';

const mockLivros = [{
  id: 12,
  user: {id: 1, nome: 'fulano'},
  titulo: 'teste',
  autor: 'teste',
  ano: 'teste',
  categoria: 'teste',
  foto: 'teste',
}];

let listaLivros: Livro [] = [];

const mockEditora = {
  cnpj: '03255566666',
  nomeFantasia: 'Teste',
}

const mockVinculos = [{
  id: 1,
  editora: mockEditora,
  livros: mockLivros,
  posicao: 1
}]

const mockVinculo = {
  id: 1,
  editora: mockEditora,
  livros: mockLivros,
  posicao: 1
}

const mockVinculoPos = {
  id: 2,
  editora: mockEditora,
  livros: mockLivros,
  posicao: 2
}

export class MockNgbModalRef {
  componentInstance = {
    prompt: undefined,
    title: undefined
  };
  result: Promise<any> = new Promise((resolve, reject) => resolve(true));
}


describe('CadastrarComponent', () => {
  let component: CadastrarComponent;
  let fixture: ComponentFixture<CadastrarComponent>;
  let vinculoServiceSub: Partial<VinculoEditoraService>
  const formBuilder: FormBuilder = new FormBuilder();
  let modalService: NgbModal;
  let mockModalRef: MockNgbModalRef = new MockNgbModalRef();

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
    modalService = TestBed.inject(NgbModal);
    fixture = TestBed.createComponent(CadastrarComponent);
    component = fixture.componentInstance;
    component.listaLivros = mockLivros;
    component.vinculos = mockVinculos;
    component.vinculoForm = formBuilder.group({
      editora: ['', [Validators.required]],
      livros: [null, [Validators.required]]
    });
    fixture.detectChanges();
  });

  it('Componente Criado', () => {
    expect(component).toBeTruthy();
  });

  it('setObjeto', () => {
    component.setObjeto();
    expect(component.setObjeto).toBeDefined();
  });

  it('livros', () => {
    component.vinculoForm.get('livros') as FormArray;
    expect(component.livros).toBeTruthy();
  });

  it('listar', () => {
    component.listar();   
    expect(component.listar).toBeDefined();
  });

  it('createLivros', () => {
    component.createLivros();   
    expect(component.createLivros).toBeDefined();
  });

  it('listar', () => {
    component.listar();   
    expect(component.listar).toBeDefined();
  });
  
  it('cadastrar', () => {
    const vinculo = mockVinculo;
    component.cadastrar();
    vinculoServiceSub = {
       cadastrar(livro): Observable<any> {
         return of(mockVinculo);
       }
    };
    expect(component.cadastrar).toBeDefined(mockVinculo);
   });

  it('adicionaLivros', () => {
    const valor = 1;
    component.adicionaLivros(valor);   
    expect(component.adicionaLivros).toBeDefined();
  });

  it('posicaoDow', () => {
    component.posicaoDow(mockVinculo, mockVinculoPos);   
    expect(component.posicaoDow).toBeDefined();
  });

  it('posicaoUp', () => {
    component.posicaoUp(mockVinculo, mockVinculoPos);   
    expect(component.posicaoUp).toBeDefined();
  });

  it('info', () => {
    component.info('', mockLivros);   
    expect(component.info).toBeDefined();
  });

  it('getDismissReason', () => {
    component.getDismissReason('ModalDismissReasons.ESC');   
    expect(component.getDismissReason).toBeDefined();
  });

  it(' open modal', fakeAsync(() => {
    spyOn(modalService, 'open').and.returnValue(mockModalRef as any);
    component.open('');
    tick();    
    expect(modalService.open).toHaveBeenCalledWith('',{ ariaLabelledBy: 'modal-basic-title' });
  }));

});
