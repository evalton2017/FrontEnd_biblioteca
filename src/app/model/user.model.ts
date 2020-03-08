import { Perfil } from './perfil.model';


export class User{
    public id:number;
    public nome:String;
    public email:String;
    public perfil:Perfil;
    public telefone:String;
    public telefones:Array<String>=new Array;
}