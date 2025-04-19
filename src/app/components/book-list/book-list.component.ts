import { Component,OnInit } from '@angular/core';
import { BookService } from '../../services/book/book.service';
import { Book } from '../../shared/models/book/book';

@Component({
  selector: 'app-book-list',
  imports: [],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent implements OnInit {
  books:Book[]=[]
constructor(private bookservice:BookService){

}
ngOnInit():void{
  this.getBooklist()
}
getBooklist(){
  this.bookservice.getBooklist().subscribe((books)=>{
    this.books=books
  })
}
}
