import { User } from './user.model';

export class Livro{
    public id: number;
    public user: User;
    public titulo: string;
    public autor: string;
    public ano: string;
    public categoria: string;
    public foto: string;
}
