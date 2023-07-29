import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddBookComponent } from './components/add-book/add-book.component';
import { BooksListComponent } from './components/books-list/books-list.component';
import { BookDetailComponent } from './components/book-detail/book-detail.component';
import { AuthComponent } from './components/auth/auth.component';
import { UpdateBookComponent } from './components/update-book/update-book.component';


const routes: Routes = [
  { path: 'login' , component: AuthComponent },
  { path: "create", component: AddBookComponent },
  { path: "list", component: BooksListComponent },
  { path: "detail/:id", component: BookDetailComponent },
  { path: "update/:id", component: UpdateBookComponent },
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: '**', redirectTo: '/login'},

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
