import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CadastrarComponent } from './cadastrar.component';
import { UserService } from 'src/app/service/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { RouterTestingModule } from '@angular/router/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('CadastrarComponent', () => {
  let component: CadastrarComponent;
  let fixture: ComponentFixture<CadastrarComponent>;
  const formBuilder: FormBuilder = new FormBuilder();
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
    fixture.detectChanges();
  });

  it('Componente Criado', () => {
    expect(component).toBeTruthy();
  });

  it('Componente editora criado', () => {
    expect(component).toBeTruthy();
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

  it('listar', () => {
    component.listar();   
    expect(component.listar).toBeDefined();
  });

  it('cadastrar', () => {
    component.cadastrar();   
    expect(component.cadastrar).toBeDefined();
  });

  
});
