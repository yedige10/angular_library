import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Requests } from '../requests';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-adminborrowed',
  templateUrl: './adminborrowed.component.html',
  styleUrls: ['./adminborrowed.component.css']
})
export class AdminborrowedComponent implements OnInit {
  requests: Requests[]=[];
  
  constructor(private userService: UserService,private toastr: ToastrService) { }

  ngOnInit() {
    this.reloadRequests();
  }
  
  showReturned() {
    this.toastr.success('Successfully returned');
  }
  reloadRequests() {
    this.userService.getApproves().subscribe(
      (data:any) => {
        this.requests=data;
        console.log(this.requests);
        

  });
}

onReturned(id:number,requests:Object){
  console.log(id,requests);

  this.userService.returnedRequest(id,requests)
      .subscribe(data => {console.log(data);this.showReturned();this.reloadRequests();}, error => console.log(error));
       
}
}
