import { TestBed } from '@angular/core/testing';

import { VinculoEditoraService } from './vinculo-editora.service';

describe('VinculoEditoraService', () => {
  let service: VinculoEditoraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VinculoEditoraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
