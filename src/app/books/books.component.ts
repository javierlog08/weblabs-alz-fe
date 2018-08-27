import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';
import { AppComponentInterface } from '../shared/app.component.interface';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit, AppComponentInterface {
  searchPlaceHolder: string;
  hasSearch: boolean = false;
  searchHandler() {
    throw new Error("Method not implemented.");
  }

  title: string = "Books";

  books:any = [];
  displayedColumns: string[] = ['bookId', 'author', 'name', 'publish_date'];

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.getBooks();
  }

  getBooks() {
    this.api.get('books').subscribe((res: Array<Object>)=> {
      this.books = res;
    });
  }

}
