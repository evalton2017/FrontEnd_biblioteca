import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarComponent } from './cadastrar.component';
import { ListarComponent } from '../listar/listar.component';
import { UserComponent } from '../user.component';
import { UserRoutingComponent } from '../user-routing.component';
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
  let userService: UserService;
  let httpClient: HttpClient;
  
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
    //Mock Service
    httpClient = TestBed.get(HttpClient)
    userService = TestBed.inject(UserService);
   
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Componente Criado', () => {
    expect(component).toBeTruthy();
  });
});
