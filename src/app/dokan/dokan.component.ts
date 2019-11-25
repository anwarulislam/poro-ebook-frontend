import { Component, OnInit } from '@angular/core';
import { DataService } from '../core/services';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dokan',
  templateUrl: './dokan.component.html',
  styleUrls: ['./dokan.component.scss']
})
export class DokanComponent implements OnInit {

  books: any;

  constructor(private data: DataService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(param => {
      this.data.getAllBooksOfStore().subscribe(data => {
        this.books = data
        console.log(this.books);
      })
    })
  }
}
