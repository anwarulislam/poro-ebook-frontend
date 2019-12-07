import { Component, OnInit } from '@angular/core';
import { DataService } from '../core/services';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dokan-product',
  templateUrl: './dokan-product.component.html',
  styleUrls: ['./dokan-product.component.scss']
})
export class DokanProductComponent implements OnInit {
  books: any

  constructor(private data: DataService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.paramMap.subscribe(param => {
      this.data.getAllBooksOfStoreByCategory(param.get('dokan_id')).subscribe(data => {
        this.books = data
        console.log(this.books);
      })
    })
  }

}
