import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Requests } from '../requests';

@Component({
  selector: 'app-adminrequests',
  templateUrl: './adminrequests.component.html',
  styleUrls: ['./adminrequests.component.css']
})
export class AdminrequestsComponent implements OnInit {
  requests: Requests[]=[];
  
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.reloadRequests();
  }
  reloadRequests() {
    this.userService.getallRequests().subscribe(
      (data:any) => {
        this.requests=data;
        console.log(this.requests);
        

  });
}
onApprove(id:number,requests:Object){
  console.log(requests);
  this.userService.updateRequest(id,requests)
      .subscribe(data => {
        console.log(data);
        this.reloadRequests();
      }, 
        error => console.log(error));
       
}
}
