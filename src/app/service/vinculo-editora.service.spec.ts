import { TestBed } from '@angular/core/testing';

import { VinculoEditoraService } from './vinculo-editora.service';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';

describe('VinculoEditoraService', () => {
  let service: VinculoEditoraService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [VinculoEditoraService]
    });
    service = TestBed.inject(VinculoEditoraService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });


  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
