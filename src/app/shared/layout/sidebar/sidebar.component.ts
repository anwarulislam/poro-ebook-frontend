import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/core/services';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  isCollapsed = true;
  categories: any;
  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getAllCategories().subscribe(data => {
      this.categories = data
      console.log(this.categories);
    })
  }

}
