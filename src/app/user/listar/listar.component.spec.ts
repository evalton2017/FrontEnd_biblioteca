import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { ListarComponent } from './listar.component';
import { UserService } from 'src/app/service/user.service';
import { UserComponent } from '../user.component';
import { UserRoutingComponent } from '../user-routing.component';
import { CadastrarComponent } from '../cadastrar/cadastrar.component';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/model/user.model';
import { Perfil } from 'src/app/model/perfil.model';
import { HttpClientModule, HttpClient, HttpHandler } from '@angular/common/http';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { RouterTestingModule } from '@angular/router/testing';

describe('ListarComponent', () => {
  const fakeActivatedRoute = {
    snapshot: { data: {  } }
  } as ActivatedRoute;

  let component: ListarComponent;
  let fixture: ComponentFixture<ListarComponent>;
  let userService: UserService;
  let httpClient: HttpClient;
  let users:User[] = [
    {id:12, nome:'Duke Gomes',email:'duke@gmail.com',perfil:Perfil.admin, },
    {id:15, nome:'Fulano da silva',email:'fulano@gmail.com', perfil:Perfil.usuario}
  ]
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
         ListarComponent
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
    fixture = TestBed.createComponent(ListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

