import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
  })
  
  export class UserService {
    private baseUrl = 'http://localhost:8080/library';
    constructor(private http: HttpClient) { }
      
  createUser(user: Object): Observable<Object>{
    return this.http.post(`${this.baseUrl}` + `/users/createuser`, user);
  }
  /*
  createUserClient(user: Object): Observable<Object>{
    return this.http.post(`${this.baseUrl}` + `/users/createclient`, user);
  }
  */
 createRequest(request: Object): Observable<Object>{
  return this.http.post(`${this.baseUrl}` + `/createrequest`, request);
}
 loginUser(user: Object): Observable<Object>{
  let headers: HttpHeaders = new HttpHeaders();
  return this.http.post(`${this.baseUrl}` + `/users/login`, user,{headers});
}
  getBooksList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`+'/listbooks');
  }
  getRequests(id:number): Observable<any> {
    return this.http.get(`${this.baseUrl}/requests/${id}`);
  }
  getBookById(id: any): Observable<any> {
    return this.http.get(`${this.baseUrl}/listbooks/${id}`);
  }
  createBook(book: Object): Observable<Object>{
    return this.http.post(`${this.baseUrl}` + `/createbook`, book);
  }
  getallRequests(): Observable<any> {
    return this.http.get(`${this.baseUrl}/allrequests/`);
  }
  
 updateRequest(id:number,requests:Object): Observable<Object>{
  return this.http.put(`${this.baseUrl}/updaterequest/${id}`,requests);
}  
  getApproves(): Observable<any> {
    return this.http.get(`${this.baseUrl}/approvedrequests/`);
  }
  
 returnedRequest(id:number,requests:Object): Observable<Object>{
  return this.http.put(`${this.baseUrl}/returnedequest/${id}`,requests);
}  

getReturned(): Observable<any> {
  return this.http.get(`${this.baseUrl}/getreturnedrequests/`);
}
}