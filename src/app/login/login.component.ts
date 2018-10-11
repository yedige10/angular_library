import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { Router, RouterModule,ActivatedRoute,NavigationExtras } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User = new User();
  loggedIn:boolean = false;
  qalert:boolean=false;
  constructor(private userService: UserService,private router: Router,private route:ActivatedRoute) { }

  ngOnInit() {
  }
  x:User;

  save() {
    this.userService.loginUser(this.user)
      .subscribe(
        (data:any) => {
          this.x=data;
          console.log(this.x);
          this.loggedIn = true;
          console.log(this.loggedIn);
          console.log(this.user);
          let navigationExtras: NavigationExtras = {
            queryParams: {
                "id":this.x.id,
                "username": this.x.username
            }
        };
        if(this.x.stafforclient=="client"){
          this.router.navigate(["login/userpage"],navigationExtras);
        }
        else if(this.x.stafforclient=="staff"){
          this.router.navigate(["adminpage/books"],{relativeTo:this.route});
        }
        },
        error => {
          this.loggedIn = false;
          this.qalert=true;
          console.log(this.loggedIn);
        });
     
      }
  
  onSubmit() {
   
    this.save();
   
  }
    
  }