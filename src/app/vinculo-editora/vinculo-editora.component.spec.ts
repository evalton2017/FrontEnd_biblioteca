import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VinculoEditoraComponent } from './vinculo-editora.component';

describe('VinculoEditoraComponent', () => {
  let component: VinculoEditoraComponent;
  let fixture: ComponentFixture<VinculoEditoraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VinculoEditoraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VinculoEditoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
