import { Component, OnInit } from '@angular/core';
import { Router, RouterModule,ActivatedRoute,NavigationExtras } from '@angular/router';
@Component({
  selector: 'app-userpage',
  templateUrl: './userpage.component.html',
  styleUrls: ['./userpage.component.css']
})
export class UserpageComponent implements OnInit {
  public username: string;
  public id: number;
  
  constructor(private route: ActivatedRoute,private router: Router) {
      
    this.route.queryParams.subscribe(params => {
          this.id = params["id"];
          this.username = params["username"];
      });
      
      
    }

ngOnInit(){
  this.onBook(); 
}
onBasket(){
  let navigationExtras: NavigationExtras = {
    queryParams: {
        "id":this.id,
        "username": this.username
    }
};
  this.router.navigate(["login/userpage/basket"],navigationExtras);
        
}

onBook(){
  let navigationExtras: NavigationExtras = {
    queryParams: {
        "id":this.id,
        "username": this.username
    }
};
  this.router.navigate(["login/userpage/books"],navigationExtras);
        
}
}