import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/model/Book';
import { AddBookService } from 'src/app/services/add-book.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  constructor(private addbookService: AddBookService,private route: ActivatedRoute) { }

  onSubmit(f) {
    console.log(f);
    this.addbookService.addBook(
      f.value.details,
      f.value.duration, 
      f.value.imageUrl,
      f.value.name );
    // f.resetform()
  }

  ngOnInit() {
    
  }
}
