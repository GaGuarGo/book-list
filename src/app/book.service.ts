import { Injectable } from '@angular/core';
import { Book } from './models/book';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class bookService {



    books: Book[] = [];

    constructor(private http: HttpClient) {

    }


    getBooks(): Observable<Book[]> {
        return this.http.get<Book[]>("http://localhost:3000/products");
    }

}
