import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { FirstpageComponent } from './firstpage/firstpage.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { UserpageComponent } from './userpage/userpage.component';
import { AdminbooksComponent } from './adminbooks/adminbooks.component';
import { AdminrequestsComponent } from './adminrequests/adminrequests.component';
import { UserbookComponent } from './userbook/userbook.component';
import { UserbasketComponent } from './userbasket/userbasket.component';
import { AdminborrowedComponent } from './adminborrowed/adminborrowed.component';
import { AdminreturnedComponent } from './adminreturned/adminreturned.component';


const itemRoutes: Routes = [
  { path: 'books', component: AdminbooksComponent},
  { path: 'books/:id', component: AdminbooksComponent},
  { path: 'requests', component: AdminrequestsComponent},
  { path: 'borrow', component: AdminborrowedComponent},
  { path: 'returned', component: AdminreturnedComponent},
  
];
const itemUserChild:Routes=[
  { path: 'books', component:UserbookComponent},
  {path: 'basket', component:UserbasketComponent}
]
const appRoutes: Routes =[
  { path: '', component: FirstpageComponent},
  { path: 'registration', component: RegistrationComponent},
  { path: 'login', component: LoginComponent},
  { path: 'login/adminpage', component: AdminpageComponent,children:itemRoutes},
  { path: 'registration/adminpage', component: AdminpageComponent,children:itemRoutes},
  { path: 'login/userpage', component: UserpageComponent,children:itemUserChild},
  
  { path: 'registration/userpage', component: UserpageComponent},
  { path: 'login/userpage', component: UserpageComponent},
  { path: 'userpage', component: UserpageComponent}
  
];
@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    FirstpageComponent,
    LoginComponent,
    AdminpageComponent,
    UserpageComponent,
    AdminbooksComponent,
    AdminrequestsComponent,
    UserbookComponent,
    UserbasketComponent,
    AdminborrowedComponent,
    AdminreturnedComponent,
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(appRoutes),FormsModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
