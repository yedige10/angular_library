import {User} from '../app/user';
import {Book} from '../app/book';
export class Requests{
    id:number;
    count:number;
    startdate:string;
    status:string;
    bookId: number;
    book:Book;
    userId: number;
    user:User;
}
