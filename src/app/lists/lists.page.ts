import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';

interface Book {
  id: string;
  title: string;
  author: string;
  price: string;
}

@Component({
  selector: 'app-lists',
  templateUrl: './lists.page.html',
  styleUrls: ['./lists.page.scss'],
})
export class ListsPage implements OnInit {

  books: Book[] = [];
  totalBooks: number = 0;
  bookCountByAuthor: { [author: string]: number } = {};

  constructor(private bookService: BookService) {}

  ngOnInit() {
    this.bookService.getBooks().subscribe((data) => {
      this.books = data;
      this.totalBooks = this.books.length;
      this.bookCountByAuthor = this.books.reduce((acc, book) => {
        acc[book.author] = (acc[book.author] || 0) + 1;
        return acc;
      }, {} as { [author: string]: number });
    });
  }
}
