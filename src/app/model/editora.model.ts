import { Contato } from './contato.model';

export class Editora{
    public id?: number;
    public cnpj: string;
    public nomeFantasia: string;
    public cep?: string;
    public logradouro?: string;
    public complemento?: string;
    public bairro?: string;
    public localidade?: string;
    public uf?: string;
    public numero?: string;
    public contatos?: Array<Contato>;
}
