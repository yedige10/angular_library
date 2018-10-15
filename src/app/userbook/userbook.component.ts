import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../book';
import { Requests } from '../requests';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-userbook',
  templateUrl: './userbook.component.html',
  styleUrls: ['./userbook.component.css']
})
export class UserbookComponent implements OnInit {
  book: Book;
  books: Book[] = [];
  public username: string;
  public id: number;
  minus:boolean=false;
  
  gbook: boolean = false;
  requests: Requests = new Requests();
  user: User = new User();
  ordering:boolean=false;
  constructor(private route: ActivatedRoute, private userService: UserService) {

    this.route.queryParams.subscribe(params => {
      this.id = params["id"];
      this.username = params["username"];
      this.user.id = this.id;
      this.user.username = this.username;
    });
  }

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
        this.gbook = true;
        this.ordering=false;
        this.minus=false;
        console.log(data);
      });
  }

  onCreateRequest() {
    if(this.requests.count<0){
      this.minus=true;
      this.ordering=false;
    }
    
    else if(this.book.count>=this.requests.count){
    this.requests.userId = this.user.id;
    this.requests.bookId = this.book.id;
    this.requests.status = "notapproved";
    console.log("requests", this.requests);
    this.userService.createRequest(this.requests)
      .subscribe(data => {
        console.log("data", data);
        this.reloadData();
      }, error => console.log(error));
      
    }
    else if(this.requests.count==null){

    }
    else{
      this.ordering=true;
      this.minus=false;
    }
  }
}