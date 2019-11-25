import { Component, OnInit } from '@angular/core';
import { DataService } from '../core/services';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-ad',
  templateUrl: './ad.component.html',
  styleUrls: ['./ad.component.scss']
})
export class AdComponent implements OnInit {

  dokanForm: FormGroup

  constructor(private data: DataService, private router: Router, private route: ActivatedRoute, private fb: FormBuilder) { }

  ngOnInit() {
    this.dokanForm = this.fb.group({
      title: [null, Validators.required],
      description: [null, Validators.required],
      author: [null, Validators.required],
      price: [null, Validators.required],
      contact: [null, Validators.required],
      thumbnail: [null, Validators.required],
    })
  }

  submit() {
    this.data.postBookForSell(this.dokanForm.value).subscribe(data => {
      console.log(data);
    })
  }

}
