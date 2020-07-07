import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LivroComponent } from './livro.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppRoutingModule } from '../app-routing.module';
import { RouterTestingModule } from '@angular/router/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { LivroService } from '../service/livro.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, NgForm, FormsModule } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NbTreeGridModule } from '@nebular/theme';

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
       imports:[
        HttpClientModule,
        AppRoutingModule,
        RouterTestingModule.withRoutes([]),
        NbTreeGridModule
       ],
       schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
       providers: [
         LivroService,
         {
          provide: ActivatedRoute,
          useValue: fakeActivatedRoute
         },
         HttpClient,
         FormBuilder,
         NgbModal
         
       ]
    })
    .compileComponents();
    //Mock Service
    httpClient = TestBed.get(HttpClient)
    livroService = TestBed.inject(LivroService);
   
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LivroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
