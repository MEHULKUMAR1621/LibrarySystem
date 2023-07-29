import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/app/model/Book';
import { AddBookService } from 'src/app/services/add-book.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {

  private books:Book[]=[];

  constructor(private AddBookService: AddBookService,private router:Router,private userServices:UserService) { }

  private role:String;
  
  ngOnInit() {
    if(this.userServices.getAuthentication()===false){
      this.router.navigate(['/login']);
      return;
    }
    this.books = this.AddBookService.getBooks();
    this.role = this.userServices.getRole();
  }

  getBool(){
    if(this.role=="admin"){
      return true;
    } else{
      return false;
    }
  }



}
