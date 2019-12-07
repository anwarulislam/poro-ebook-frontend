import { Component, OnInit } from '@angular/core';
import { DataService } from '../core/services';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bechakena',
  templateUrl: './bechakena.component.html',
  styleUrls: ['./bechakena.component.scss']
})
export class BechakenaComponent implements OnInit {

  books: any

  constructor(private data: DataService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(param => {
      this.data.getAllBooksOfStore('bechakena').subscribe(data => {
        this.books = data
        console.log(this.books);
      })
    })
  }
}
