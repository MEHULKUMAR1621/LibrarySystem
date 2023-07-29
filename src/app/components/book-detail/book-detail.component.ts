import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/model/Book';
import { AddBookService } from 'src/app/services/add-book.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  private id :number;
  private book:Book;
  constructor(private route: ActivatedRoute, private addBookService : AddBookService) { }

  ngOnInit() {
      this.route.params.subscribe(params => {
        console.log(params) //log the entire params object
        console.log(params['id']) //log the value of id

        this.id = params['id'];
        this.book = this.addBookService.findBook(this.id);
        console.log(this.book);
      });
  }


  

}
