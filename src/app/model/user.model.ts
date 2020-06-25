import { Perfil } from './perfil.model';
import {Telefone} from './telefone';

export class User{
    public id:number;
    public nome:String;
    public email:String;
    public perfil:Perfil;
    public senha:String;
    public telefones: Telefone[] = [];
}