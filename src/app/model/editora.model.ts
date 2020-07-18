import { Contato } from "./contato.model";

export class Editora{
    private id?:number;
	private cnpj:string;
	private nomeFantasia:string;
	private cep:string;
	private logradouro:string;
	private complemento?:string;
	private bairro:string;
	private localidade:string;
	private uf:string;
	private numero:string;
    public contatos?: Contato[] = [];


}