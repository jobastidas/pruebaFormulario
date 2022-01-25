import { Component, OnInit, Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApisPruebasService implements OnInit {

  constructor(
   private http : HttpClient
  ) {     
   

  }
  ngOnInit() {
  }  

  PostUsers(data:any){
    return this.http.post('http://190.60.101.59:6003/api/Personas',data);
  }
}
