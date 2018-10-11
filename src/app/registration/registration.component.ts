import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { Router, RouterModule,ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  user: User = new User();
  submitted = false;

  constructor(private userService:UserService,private router: Router,private route:ActivatedRoute) { }

  ngOnInit() {
  }

  newUser(): void {
    this.submitted = false;
    this.user = new User();
  }


  saveUser() {
    this.userService.createUser(this.user)
      .subscribe(data => console.log(data), error => console.log(error));
    this.router.navigate(["adminpage/books"],{relativeTo:this.route});
  }
  /*
  saveClient() {
    this.userService.createUserClient(this.user)
      .subscribe(data => console.log(data), error => console.log(error));
    this.user = new User();
  }
  */

  onSubmit() {
    this.saveUser();
    /*
    if(this.user.stafforclient=="staff"){
      
      console.log("staff");  
      this.saveStaff();
      
    }
    else{
      
      console.log("client");
      this.saveClient();
    }
    */
  }
  }