import { Component, OnInit } from '@angular/core';
import { Requests } from '../requests';
import { UserService } from '../user.service';

@Component({
  selector: 'app-adminreturned',
  templateUrl: './adminreturned.component.html',
  styleUrls: ['./adminreturned.component.css']
})
export class AdminreturnedComponent implements OnInit {
  requests: Requests[]=[];
  
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.reloadRequests();
  }
  reloadRequests() {
    this.userService.getReturned().subscribe(
      (data:any) => {
        this.requests=data;
        console.log(this.requests);
        

  });
}
}
