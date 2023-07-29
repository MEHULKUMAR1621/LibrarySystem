import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  private errorMessage:String;
  private error=false;
  constructor(private userServices: UserService) { }

  ngOnInit() {
  }

  onSubmit(f){
    console.log(f);
    this.userServices.loginuser(f.value.email,f.value.password);
    if(this.userServices.getAuthentication()==false){
      this.error=true;
      this.errorMessage = "Login Failed..";
    }
  }

}
