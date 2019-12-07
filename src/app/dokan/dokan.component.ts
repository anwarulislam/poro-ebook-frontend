import { Component, OnInit } from '@angular/core';
import { DataService } from '../core/services';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dokan',
  templateUrl: './dokan.component.html',
  styleUrls: ['./dokan.component.scss']
})
export class DokanComponent implements OnInit {

  constructor(private data: DataService, private router: Router, private route: ActivatedRoute) { }

  categories: any;

  ngOnInit() {
    this.data.getAllCategories('dokan').subscribe(data => {
      this.categories = data
      console.log(this.categories);
    })
  }
}
