import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/model/Book';
import { AddBookService } from 'src/app/services/add-book.service';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {

  private book: Book;
  private value : String="Update";
  constructor(private addbookService: AddBookService,private route: ActivatedRoute,private router:Router) { }

  onSubmit(f) {
    console.log(f);
    this.addbookService.replaceBook(this.book.bId,f.bname,f.value.duration,f.value.details,f.value.imageUrl);
    this.router.navigate(['/list']);
  }

  ngOnInit() {
    this.route.params.subscribe(params => {

      this.book = this.addbookService.findBook(params['id']);
      console.log(this.book);
    });
    }
  }

