import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../model/Book';

@Injectable({
  providedIn: 'root'
})
export class AddBookService {

  private books:Book[] = [
    {
      bId: 78120,
      bDuration: '08:35',
      bName: 'Peachpit',
      bDetails: 'Experiment Design and Practice',
      bImage: 'https://m.media-amazon.com/images/I/81PAFmuh4XS._AC_UF1000,1000_QL80_.jpg',
    },
    {
      bId: 78121,
      bDuration: '06:20',
      bName: 'The Insanity of Obedience',
      bDetails: 'Walking with Jesus on Tough Places',
      bImage: 'https://i0.wp.com/www.opendoorscanada.org/wp-content/uploads/2021/07/B-the-insanity-of-obedience.jpg?fit=300%2C450&ssl=1',
    },
    {
      bId: 78122,
      bDuration: '20:20',
      bName: 'The Jungle Book',
      bDetails: 'Jungle Guy Exporation & His Joy',
      bImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr8cG2r8E73WZxGbzHOU27n_s6Bm-BHx7d0w&usqp=CAU',
    },
    {
      bId: 78123,
      bDuration: '05:00',
      bName: 'Harry Potter',
      bDetails: 'Boy With Magical Wand Story',
      bImage: 'https://5.imimg.com/data5/SELLER/Default/2020/8/PE/PX/MO/54836353/harry-potter-books-collection-j-k-rowling-bloomsbury-publishing.jpg',
    },
    {
      bId: 78124,
      bDuration: '15:40',
      bName: 'Akhbar and Birbal',
      bDetails: 'Comic Story Entertainment',
      bImage: 'https://img.etimg.com/photo/msid-99146082/101-witty-stories-of-akbar-and-birbal.jpg',
    },
    {
      bId: 78125,
      bDuration: '10:30',
      bName: 'Toy Story',
      bDetails: 'Toy Animation Fiction',
      bImage: 'https://lumiere-a.akamaihd.net/v1/images/p_toystory4_19639_917ad716.jpeg?region=0%2C0%2C540%2C810',
    }
  ];

  private bookDetail:Book;

  getBooks() {
    return this.books;
  }

  addBook(details, duration, imageUrl, name) {
    const book = {
      bId: Math.random()*10000,
      bDuration: duration,
      bName: name,
      bDetails: details,
      bImage: imageUrl,
  }
    this.books.push(book);
  }
  
  removeObjectWithId(id) {
    return this.books.filter((obj) => obj.bId !== id);
  }

  replaceBook(bId,name,duration,details,imageUrl) {
    this.books = this.removeObjectWithId(bId);
    const book = {
      bId: bId,
      bDuration: duration,
      bName: name,
      bDetails: details,
      bImage: imageUrl,
    } 
    this.books.push(book);
  }

  findBook(id) {
    this.books.forEach(book=>{
      if(book.bId==id){
        console.log(book);
        this.bookDetail = book;
      };
    });
    return this.bookDetail;
  }
}
