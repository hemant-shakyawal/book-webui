import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from '../../shared/models/book/book';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';


@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private readonly http:HttpClient) { }

  getBooklist():Observable<Book[]>{
   return this.http.get<Book[]>(
    `${environment.apiUrl}`
   )

  }
}
