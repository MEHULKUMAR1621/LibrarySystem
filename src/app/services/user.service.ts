import { Injectable } from '@angular/core';
import { User } from '../model/User';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  private user:User = null;
  private authentication:Boolean=false;

  private users: User[] = [
    {
      id: 31,
      username: 'mehul@gmail.com',
      password: '943191',
      role: 'admin'
    },
    {
      id: 312,
      username: 'mk@gmail.com',
      password: '94319',
      role: 'user'
    },
    {
      id: 321,
      username: 'mehul@gmail.com',
      password: '943191536',
      role: 'admin'
    } 
  ]

  constructor(private router:Router) { }

  loginuser(username,password){
   
    this.users.forEach(element => {
      console.log(element);
      if(element.username==username && element.password==password){
        this.user = element;
        this.authentication = true;
        this.router.navigate(['/list']);
      }
    });
    console.log(this.user);
    if(this.user==null){
      this.router.navigate(['/']);
      this.authentication = false;
    }
  }
    
  getRole(){
      return this.user.role;
  }

  getAuthentication(){
    return this.authentication;
  }
}

