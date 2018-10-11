import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { UserService } from '../user.service';
import { Server } from 'http';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Requests } from '../requests';
import { User } from '../user';
@Component({
  selector: 'app-userbook',
  templateUrl: './userbook.component.html',
  styleUrls: ['./userbook.component.css']
})
export class UserbookComponent implements OnInit {
  book:Book;
  books: Book[]=[];
  public username: string;
  public id: number;
  gbook:boolean=false;
  requests:Requests=new Requests();
  user:User=new User();
  constructor(private route: ActivatedRoute,private userService: UserService) {
      
    this.route.queryParams.subscribe(params => {
          this.id = params["id"];
          this.username = params["username"];
          this.user.id=this.id;
          this.user.username=this.username;
        });
      
      
    }
  
  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.userService.getBooksList().subscribe(data=>this.books=data);

  }
  

  getBook(id:any)
  {
    
    this.userService.getBookById(id)
    .subscribe(data => {this.book = data;this.gbook=true;
      console.log(data);});
    
    
  }
  onCreateRequest() {
    this.requests.userId=this.user.id;
    this.requests.bookId=this.book.id;
    this.requests.status="notapproved";
    let dateFormat = require('dateformat');
    let now = new Date();
    console.log("requests",this.requests);
    this.userService.createRequest(this.requests)
      .subscribe(data => console.log("data",data), error => console.log(error));
  }
}