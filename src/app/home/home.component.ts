import { Component, OnInit } from '@angular/core';
import { DataService } from '../core/services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  books: any;
  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getAllBooks().subscribe(data => {
      this.books = data
    })
  }

}
