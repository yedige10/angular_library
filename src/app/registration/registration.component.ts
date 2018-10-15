import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { Router, RouterModule,ActivatedRoute, NavigationExtras } from '@angular/router';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  user: User = new User();
  submitted = false;
  x:User;
  constructor(private userService:UserService,private router: Router,private route:ActivatedRoute) { }

  ngOnInit() {
  }

  newUser(): void {
    this.submitted = false;
    this.user = new User();
  }


  saveUser() {
    if(this.user.stafforclient=="staff"){
    this.userService.createUser(this.user)
      .subscribe(data => {console.log(data);this.router.navigate(["adminpage/books"],{relativeTo:this.route})}, error => console.log(error));
    }
    else{
      this.userService.createUser(this.user)
      .subscribe((data:any) => {console.log(data);this.x=data;
        let navigationExtras: NavigationExtras = {
          queryParams: {
              "id":this.x.id,
              "username": this.x.username
          }
      };
        this.router.navigate(["registration/userpage/books"],navigationExtras)}, error => console.log(error));
    }
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