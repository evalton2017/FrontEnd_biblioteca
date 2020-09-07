import {Editora} from './editora.model';
import {Livro} from './livro.model';

export class VinculoEditora{
    public id?: number;
    public editora?: Editora;
    public livros?: Array<Livro> = [];
    public posicao?: number;
}

