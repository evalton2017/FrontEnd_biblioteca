import { Perfil } from './perfil.model';
import {Telefone} from './telefone';
import { Livro } from './livro.model';

export class User{
    public id: number;
    public nome: string;
    public email?: string;
    public perfil?: Perfil;
    public senha?: string;
    public ip?: string;
    public Livros?: Array<Livro>;
    public telefones?: Array<Telefone>;


}
