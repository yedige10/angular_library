import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { UserService } from '../user.service';

@Component({
  selector: 'app-adminbooks',
  templateUrl: './adminbooks.component.html',
  styleUrls: ['./adminbooks.component.css']
})
export class AdminbooksComponent implements OnInit {

  i: number;
  books: Book[] = [];
  book: Book;
  cbook: Book = new Book();
  createBook: boolean = true;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.userService.getBooksList().subscribe(data => this.books = data);

  }


  getBook(id: any) {

    this.userService.getBookById(id)
      .subscribe(data => {
        this.book = data;
        this.createBook = false; console.log(data); console.log(this.createBook)
      });


  }
  saveBook() {
    this.userService.createBook(this.cbook)
      .subscribe(data => { console.log(data); this.reloadData(); }, error => console.log(error));
    this.cbook = new Book();

  }
  OnCreateBook() {
    this.createBook = true;
    console.log(this.createBook);
  }
  onSubmit() {
    this.saveBook();
  }
}