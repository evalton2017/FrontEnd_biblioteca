import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import {LivroModule} from './livro/livro.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NbThemeModule, NbLayoutModule, NbButtonModule, NbSidebarModule, NbCardModule, NbIconModule, NbUserModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { TestBed, async } from '@angular/core/testing';
import { APP_BASE_HREF } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';


const fakeActivatedRoute = {
  snapshot: { data: {  } }
} as ActivatedRoute;

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: fakeActivatedRoute
         },
        {
          provide: APP_BASE_HREF,
          useValue: "/"
        }
      ],
      imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        NbUserModule,
        LivroModule,
        AppRoutingModule,
        NgbModule,
        NbEvaIconsModule,
        RouterModule, // RouterModule.forRoot(routes, { useHash: true }), if this is your app.module
        NbLayoutModule,
        NbSidebarModule, // NbSidebarModule.forRoot(), //if this is your app.module
        NbButtonModule,
        NbThemeModule.forRoot(),
        RouterTestingModule,
      ]
    }).compileComponents();
  }));

  it('deve criar appComponent biblioteca', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'biblioteca'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('biblioteca');
  });

});
