import { Perfil } from './perfil.model';
import {Telefone} from './telefone';
import { Livro } from './livro.model';

export class User{
    public id:number;
    public nome:String;
    public email:String;
    public perfil:Perfil;
    public senha:String;
    public ip:String;
    public Livos: Livro [] = [];
    public telefones: Telefone[] = [];


}