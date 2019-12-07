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
  imageURL: any;

  constructor(private data: DataService, private router: Router, private route: ActivatedRoute, private fb: FormBuilder) { }

  ngOnInit() {
    this.dokanForm = this.fb.group({
      title: [null, Validators.required],
      description: [null, Validators.required],
      author: [null, Validators.required],
      price: [null, Validators.required],
      isFree: [false],
      contact: [null, Validators.required],
      thumbnail: [null, Validators.required],
    })
  }

  onFree() {
    let isFree = this.dokanForm.get('isFree').value
    if (isFree) {
      this.dokanForm.get('price').reset()
      this.dokanForm.get('price').disable()
    } else {
      this.dokanForm.get('price').enable()
    }
  }

  // Image Preview
  showPreview(event) {
    console.log(event);
    const file = (event.target as HTMLInputElement).files[0];
    console.log(file);
    this.dokanForm.patchValue({
      thumbnail: file
    });
    this.dokanForm.get('thumbnail').updateValueAndValidity()

    // File Preview
    const reader = new FileReader();
    reader.onload = () => {
      this.imageURL = reader.result as string;
    }
    reader.readAsDataURL(file)

  }

  submit() {

    var form_data = new FormData();

    for (var key in this.dokanForm.value) {
      console.log(key);
      form_data.append(key, this.dokanForm.value[key]);
    }


    this.data.postBookForSell(form_data).subscribe(data => {
      console.log(data);
    })
  }

}
