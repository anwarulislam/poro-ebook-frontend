import { Component, OnInit } from '@angular/core';
import { DataService } from '../core/services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  books = [
    {
      name: 'The Poison Killer',
      author: 'Julie Martinez',
      img: 'assets/img/image 1.png',
      link: ''
    },
    {
      name: 'Very Nice',
      author: 'Marey Dermansky',
      img: 'assets/img/image 4.png',
      link: ''
    },
    {
      name: 'The Little Mermaid',
      author: 'Hans Christina Anderson',
      img: 'assets/img/image 2.png',
      link: ''
    },
    {
      name: 'A Love Hate Thing',
      author: 'Hans Christina Anderson',
      img: 'assets/img/image 3.png',
      link: ''
    },
    {
      name: 'The Arsonist',
      author: 'Chloe Hooper',
      img: 'assets/img/image 5.png',
      link: ''
    },
    {
      name: 'Very Nice',
      author: 'Marey Dermansky',
      img: 'assets/img/image 4.png',
      link: ''
    }
  ]
  constructor(private data: DataService) { }

  ngOnInit() {
    // this.data.getAllBooks().subscribe(data => {
    //   this.books = data
    // })
  }

}
