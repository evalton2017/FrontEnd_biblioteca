import { TestBed } from '@angular/core/testing';

import { EditoraService } from './editora.service';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';

const mockRespostaCep = {
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

const mockCep = '71693015';

describe('EditoraService', () => {
  let service: EditoraService;
  let httpMock: HttpTestingController;

  const urlCep = `https://viacep.com.br/ws/`;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [EditoraService]
    });
    service = TestBed.inject(EditoraService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('deve buscar cep', () => {
    service.buscaCep(mockCep).subscribe( data => {
      expect(data).toBe(mockRespostaCep);
  });
    const req = httpMock.expectOne(
    `${urlCep}/${mockCep}/json`,
  );
    expect(req.request.method).toBe('GET');

    req.flush(mockRespostaCep);

  });
});
