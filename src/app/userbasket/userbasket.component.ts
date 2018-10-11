import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
import {Requests} from '../requests';
@Component({
  selector: 'app-userbasket',
  templateUrl: './userbasket.component.html',
  styleUrls: ['./userbasket.component.css']
})
export class UserbasketComponent implements OnInit {
  public username: string;
  public id: number;
  kaska:boolean=false;
  //requests:Requests=new Requests();
  requests: Requests[]=[];
  
  constructor(private route: ActivatedRoute,private userService: UserService) {
      
    this.route.queryParams.subscribe(params => {
          this.id = params["id"];
          this.username = params["username"];
          
    
        });
      
      
    }

  ngOnInit() {
    this.reloadRequests();
  }
  reloadRequests() {
    this.userService.getRequests(this.id).subscribe(
      (data:any) => {
        this.requests=data;
        console.log(this.requests);
        this.kaska=true;

  });
}

}